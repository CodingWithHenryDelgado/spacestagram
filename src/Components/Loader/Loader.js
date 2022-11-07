import React from 'react'
import './Loader.css'

const Loader = () => {
    return (
        <div className='loading-page'>
            <section>
                <div className="solar_system">
                    <div className="orbit1">
                        <div className="planet_holder">
                            <div className="planet">
                            </div>
                        </div>
                    </div>
                    <div className="orbit2">
                        <div className="planet_holder2">
                            <div className="planet2">
                            </div>
                        </div>
                    </div>
                    <div className="orbit3">
                        <div className="planet_holder3">
                            <div className="planet3">
                            </div>
                        </div>
                    </div>
                    <div className="sun"></div>
                </div>
            </section>
        </div >
    )
}

export default Loader