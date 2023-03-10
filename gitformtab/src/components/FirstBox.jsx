import { useState,useRef } from "react";

function FirstBox() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const [phone,setPhone]=useState('')
    const [profession,setProfession]=useState('')
    const [age,setAge]=useState('')

    const tab1=useRef(null)
    const tab2=useRef(null)
    const tab3=useRef(null)

    const link1=useRef(null)
    const link2=useRef(null)
    const link3=useRef(null)

    

    const [isActive,setIsactive]=useState(false)

    function handleSubmit(e)
    {
        e.preventDefault()
        console.log(name,email,address,phone,profession,age)
    }


    function handleSecond()
    {
        tab1.current.classList.remove('active','show')
        tab2.current.classList.add('active','show')
        link1.current.classList.remove('active')
        link2.current.classList.add('active')
    }
    function handleFirst()
    {
        tab2.current.classList.remove('active','show')
        tab1.current.classList.add('active','show')
        link2.current.classList.remove('active')
        link1.current.classList.add('active')
    }
    function handleThird()
    {
        tab2.current.classList.remove('active','show')
        tab3.current.classList.add('active','show')
        link2.current.classList.remove('active')
        link3.current.classList.add('active')
    }

    function handleSecond2()
    {
        tab3.current.classList.remove('active','show')
        tab2.current.classList.add('active','show')
        link3.current.classList.remove('active')
        link2.current.classList.add('active')
    }


    
    

    


    return ( 
        <section className="sec-1">
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{height:'100vh'}}>
                    <div className="col-md-6 p-3 shadow bg-light">
                    <ul class="nav nav-pills nav-fill mb-3">
  <li class="nav-item">
    <a class="nav-link active" ref={link1} data-bs-toggle='tab'  aria-current="page" href="#home">1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" ref={link2} data-bs-toggle='tab'  aria-current="page" href="#profile">2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" ref={link3} data-bs-toggle='tab'  aria-current="page" href="#contact">3</a>
  </li>
  
</ul>

<div class="tab-content" id="myTabContent">



  <div class="tab-pane fade show active" ref={tab1} id="home" role="tabpanel" aria-labelledby="home-tab">
  <form action="">
            <label for="" className="form-label">Name</label>
            <input type="text" className="form-control" onChange={e=>{setName(e.target.value)}} />
            <label for="" className="form-label">Address</label>
            <input type="text" className="form-control" onChange={e=>{setAddress(e.target.value)}}/>
            <label for="" className="form-label">Email</label>
            <input type="text" className="form-control" onChange={e=>{setEmail(e.target.value)}}/>
            <div className="d-flex justify-content-end my-3" >
            <a type="button" className="btn btn-primary"  onClick={handleSecond}>Next</a>

            </div>
        </form>
  </div>
  <div class="tab-pane fade" id="profile" ref={tab2} role="tabpanel" aria-labelledby="profile-tab">
  <form action="">
            <label for="" className="form-label">Age</label>
            <input type="text" className="form-control" onChange={e=>{setAge(e.target.value)}} />
            <label for="" className="form-label">Phone</label>
            <input type="text" className="form-control" onChange={e=>{setPhone(e.target.value)}}/>
            <label for="" className="form-label">Profession</label>
            <input type="text" className="form-control" onChange={e=>{setProfession(e.target.value)}}/>
            <div className="d-flex justify-content-end my-3" >
            <button type="button" className="btn btn-primary me-2" onClick={handleFirst}>Previous</button>
            <button type="button" className="btn btn-primary" onClick={handleThird}>Next</button>

            </div>
        </form>
  </div>
  <div class="tab-pane fade" id="contact" ref={tab3} role="tabpanel" aria-labelledby="contact-tab">
  <form action="" onSubmit={e=>handleSubmit(e)}>
            <label for="" className="form-label">Name</label>
            <input type="text" className="form-control" value={name} />
            <label for="" className="form-label">Address</label>
            <input type="text" className="form-control" value={address}/>
            <label for="" className="form-label">Email</label>
            <input type="text" className="form-control" value={email}/>
            <label for="" className="form-label">Age</label>
            <input type="text" className="form-control" value={age}/>
            <label for="" className="form-label">Phone</label>
            <input type="text" className="form-control" value={phone}/>
            <label for="" className="form-label">Profession</label>
            <input type="text" className="form-control" value={profession}/>

            <div className="d-flex justify-content-end my-3" >
            <button type="button" className="btn btn-primary me-2"  onClick={handleSecond2}>Previous</button>
            <button type="submit" className="btn btn-primary" >Submit</button>

            </div>
        </form>
  </div>
</div>


                    
                    </div>
                </div>
            </div>
        
        </section>
     );
}

export default FirstBox;