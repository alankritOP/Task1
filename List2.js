import React, { useState } from 'react';
import '../App.css';
import EmpList from './empList';
import Grid from '@material-ui/core/Grid';
/*import { Jumbotron, Container } from 'reactstrap';
<div background='red'>
<Jumbotron fluid>
  <Container fluid>
    <h1 className="display-3">Fluid jumbotron</h1>
    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </Container>
</Jumbotron>
</div>     */  

//<li>{inputSalary}</li>
//<li>{inputStatus}</li>

const List2=()=>{
    const [inputName,setName]=useState('');
    const [inputSalary,setSalary]=useState(null);
    const [inputStatus,setStatus]=useState('');

    const [array,setArray]=useState([]);

    const changeName=(e)=>{
        setName(e.target.value);
    };
    
    const changeSalary=(e)=>{
        setSalary(e.target.value);
    };
    

    const changeStatus=(e)=>{
        setStatus(e.target.value);
    };
   console.log(array);
    const handleClick=(e)=>{
        e.preventDefault();
        setArray((prevData)=>{
            return [...prevData,inputName,inputSalary,inputStatus]
     });
        setName("");
        setSalary('');
        setStatus("");

    };
    const deleteData=(id)=>{
        console.log('Delete the data');
        setArray((prevData)=>{
            return prevData.filter((ele,index)=>{
                return index!==id;
            })
        }) 
      };
      const handleSubmit=(e)=>{
          e.preventDefault();
      }


    return(
        <div > 
            <div className='big' >
          <h1>A Task Todo App</h1>
            </div>
         
            <Grid container spacing={3}>
        <Grid item xs={6}>
        <div className='medium'>
                <h2>Enter Employee details</h2>
                <label>Enter Employee name:
                <input  onChange={changeName} type='text' value={inputName} placeholder='enter employee name' required/></label>
                <br/><br/>
                <label>Enter Employee salary:
                <input onChange={changeSalary} type='text' value={inputSalary} placeholder='enter employee salary' required/><small>(salary Must be in number)</small>
                </label>
               
                <br/> <br/>
                <label>Enter Employee status:
                <input onChange={changeStatus} type='text' value={inputStatus} placeholder='enter employee status' required/>
                </label><br/><br/>
                <button className='bt1' type='submit' onSubmit={handleSubmit}  onClick={handleClick}>Submit</button>
                </div>

        </Grid>
        <Grid item xs={6}>
        <ol>
                    {array.map((op,index)=>{
                        return (<EmpList 
                            key={index}
                            id={index}
                            text={op}
                            onSelect={deleteData}
                            />);                   
                        })}                 
            </ol>        
        </Grid>
        </Grid>                                   
        </div>
    )
}
export default List2