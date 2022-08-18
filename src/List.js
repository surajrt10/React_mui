import React , {useState} from 'react'
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
function List() {
    
    const [List, setList] = useState(['suraj','niraj'])
    const [value, setValue] = useState('')
    const handleAdd = ()=>{
        
        if(value!=='')
        setList([...List,value])
        else
        alert('Enter a value');
         
        setValue('')
      }
    const handleDelete =(i) =>{
        console.log(i);
        const list=List.filter((item,id)=>id!==i)
        setList(list)
    }   
    return (
    
    <div className='list'>
    <ul>
        {List&& List.map((item,i)=> {
          return( <li>
             <Typography variant="h5" key={i}>
            {item}
            
    <Button sx={{float:'right'}} variant='contained' color='error' onClick={()=>handleDelete(i)} size="small">DELETE</Button>
    
          
    </Typography></li>  )
        })}
    </ul>

    <TextField sx={{width:0.8,alignSelf:'center'}} label="Required" helperText="Add only names to the list" size="small" required id="outlined-required" value={value} onChange={(e)=>setValue(e.target.value)}></TextField>
    <Button sx={{border:2,margin:2}} onClick={handleAdd} size='small'>ADD</Button>
    </div>

  )
}

export default List