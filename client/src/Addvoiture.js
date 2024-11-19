import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import './Addvoiture.css'

function Addvoiture() {
    const [values,setValues] =useState({
        matr:"",
        marque:"",
        modele:"",
        couleur:"",
        nbplaces:"",
        transmission:"",
        img : ''
    });

    const navigate =useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:6061/addvoiture", values)
        .then((res) =>{
            if(res.data.Status === "Success"){
                navigate("")
            }else{
                alert("Ajout avec Success")
            }
        })
        .then((err)=> {
            console.log('error:')
            console.log(err)})
    };
    const UploadImage =(event)=>{
        
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend =() =>{
            setValues((prev)=>({
                ...prev ,
                img : reader.result

            }))
        }
    }

  return (
    <div>
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
          <div className="bg white p-3 rounded w-25">
            <h2>Ajouter une voiture</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="matr"><strong>Matricule</strong></label>
                    <input type='text' placeholder='entrer matricule' name='matr' onChange={(e)=>setValues({...values,matr:e.target.value})} className='form-control rounded-0' />
                </div>
                <div className="mb-3">
                    <label htmlFor="marque"><strong>Marque</strong></label>
                    <input type='text' placeholder='entrer une marque' name='marque' onChange={(e)=>setValues({...values,marque:e.target.value})} className='form-control rounded-0' />
                </div>
                <div className="mb-3">
                    <label htmlFor="modele"><strong>Modele</strong></label>
                    <input type='text' placeholder='entrer un modele' name='modele' onChange={(e)=>setValues({...values,modele:e.target.value})} className='form-control rounded-0' />
                </div>
                <div className="mb-3">
                    <label htmlFor="couleur"><strong>Couleur</strong></label>
                    <input type='text' placeholder='entrer couleur' name='couleur' onChange={(e)=>setValues({...values,couleur:e.target.value})} className='form-control rounded-0' />
                </div>
                <div className="mb-3">
                    <label htmlFor="nbplaces"><strong>Nombre de place</strong></label>
                    <input type='text' placeholder='entrer nombre de place' name='nbplaces' onChange={(e)=>setValues({...values,nbplaces:e.target.value})} className='form-control rounded-0' />
                </div>
                <div className="mb-3">
                    <label htmlFor="transmission"><strong>Transmission</strong></label>
                    <input type='text' placeholder='entrer transmission' name='transmission' onChange={(e)=>setValues({...values,transmission:e.target.value})} className='form-control rounded-0' />
                </div>
                <div className="mb-3">
                            <label htmlFor="image"><strong>Photo de la voiture</strong></label>
                            <input accept="image/*" type="file" id='idf' onChange={UploadImage} className="form-control rounded-0" />
                        </div>
                <button type='submit'>Ajouter</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Addvoiture