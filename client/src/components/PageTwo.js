import React, {useState} from 'react'
export default function PageTwo(){
    const [modal, setModal] = useState(false);
  
    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
    return(

    
        <div className='pageTwo' >
            <div className="bg-img">
                <div className="logo2">/eft Shift</div>
                <div className="qr-boc"></div>
                <div className="inst">
                <ul className='steps'>
                    <li>Step 1: Please download out app from </li>
                    <li>Step 2 kjgyjrdjyfukhb yjgj yhfc kyvluhvygk  hjb kuftyf kytv kluv u it d6rd6rt yugyu fiotf  uiugo67trfi67f ou pyup87g</li>
                    <li>Step 3 gcrestg il iyu gvyit glu buyotyfio uly ouvo7tyfri6ditf uo tyf7t y hi oyugi6ry d</li>
                </ul>
                
                </div>
                {/* <button onClick={toggleModal} class="bg-green-400 hover:bg-gray-100 text-gray-800 font-bold font-semibold py-2 px-4 border border-gray-400 rounded verify-btn">
                Verify Status
                </button> */}

<button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p>pisci eaque laboriosam nam quaerat voluptate quae voluptatibus explicabo quas retis assumenda ugit repellendus? Illum maxime obcaecati, animi tenetur eos totam. Sint iure omnis velit as</p>
            </div>
            
</div>
    )
}