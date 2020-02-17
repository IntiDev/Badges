import React from 'react';

class BadgeForm extends React.Component {
    render() {
        return (
           <>
            <h1> New attendant </h1>
            <form>
                <div className='form-group'>
                    <label> First Name </label>
                    <input onChange={this.handleChange} className='form-control' type='text' name='firstName'/>
                </div>
                <button className='btn btn-primary'> Save </button>
            </form>
           </>
        )
    }
}

export default BadgeForm;