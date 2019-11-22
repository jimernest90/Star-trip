import React from 'react'
import { api } from '../services/ApiConfig'
import './Crew.css'
import { Button } from '../styles/Button'

class Crew extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            crew: [],
            crewToDelete: {},
            toDelete: false

        }
    }
    componentDidMount() {
        this.fetchCrew()
    }
    fetchCrew = async () => {
        try {
            const crew = await api.get('/crew/crew')
            this.setState((state => ({
                crew: [...state.crew, ...crew.data]
            })))


        } catch (error) {
            console.error(error)
        }
    }
    handleDeleteCrew = () => {
        api.delete(`/crew/crew/${this.state.crewToDelete.id}`)
            .then(() => {
                const allCrew = this.state.crew
                allCrew.splice(this.state.crewToDelete.index, 1)
                this.setState({
                    crew: allCrew
                })
            }).then(() => this.handleCloseModal())
            .catch(err => console.error(err))
    }


    handleOpenModal = (crew, index) =>
        this.setState({ toDelete: true, crewToDelete: { ...crew, index } })

    handleCloseModal = () => this.setState({ toDelete: false, crewToDelete: {} })

    renderDeleteConfirmModal = () => {
        if (this.state.toDelete) {
            return (
                <div className="modal open">
                    <h4>
                        Are you Sure you want to delete {this.state.crewToDelete.name}?
                    </h4>
                    <div className="buttons">
                        <Button
                            color="danger"
                            title="Yes"
                            onClick={this.handleDeleteCrew}
                        />
                        <Button
                            color="primary"
                            title="Cancel"
                            onClick={this.handleCloseModal}
                        />
                    </div>
                </div>
            )
        } else {
            return <div className="close" />
        }
    }
    render() {
        // console.log(this.state.crew)
        const renderCrew = this.state.crew && this.state.crew.map((crew, index) => (
            <div className='crew' key={index}>
                <div className='crew-container'>
                    <Button
                        variant="fab"
                        color="danger"
                        title="X"
                        className="delete"
                        onClick={() => this.handleOpenModal(crew, index)}
                    />
                    <img src={crew.image} alt={crew.name} className='crew-image' />
                    <div className='crew-info'>
                        <p><i>name:</i>{crew.name}</p>
                        <p><i>species:</i>{crew.species}</p>
                        <p><i>greeting:</i>{crew.greeting}</p>
                        <p><i>rank:</i>{crew.rank}</p>
                    </div>
                </div>
            </div>
        ))
        return (
            <>
                <div className='renderCrew'>{renderCrew}</div>
                <div className='modal'>{this.renderDeleteConfirmModal()}
                </div>
            </>
        )
    }

}


export default Crew;