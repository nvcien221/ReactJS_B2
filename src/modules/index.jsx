import React, { Component } from 'react'
import { listGlasses } from './glasses/lists-glasses';
export default class Glasses extends Component {
    state = {
        urlImage : "/image/v1.png",
    };
    changeUrlImage = (url)=>{
        return ()=>{
            this.setState({urlImage : url})
            //alert("Lấy thành công")
        }
    }
    renderListGlasses = ()=>{
                const result = listGlasses.map((item)=>{ 
                    return (
                        <button onClick={this.changeUrlImage(item.url) } className="col-2 p-2 m-1" key={this.id} style={{border:"1px solid wheat"}}>
                         <img  style={{width:"70%"}} src={item.url} alt=""/>
                          
                        </button>
                        
        
                    )
                })
                return result;
            }
  render() {
    return (
    <div className=" py-4">
             <div className='container text-center'>
             <div className="row">
                 <div className="col-6 box-model">
                     <img src="/image/model.jpg" alt="" />
                 </div>

                 
                 <div style={{
                        position:"relative",
                     }}  
                 className="col-6 box-model">
                     <img src="/image/model.jpg" alt="" />
                     <img style={{
                        height:"20%", width: "25%",
                        position: "absolute",
                        top:"65px", left:"248px",
                        }} src={this.state.urlImage} alt="" />
                 </div>
             </div>

            <div className='container mt-5 row text-center' >
                 {this.renderListGlasses()}
             </div>
             </div>
    </div>
    )
  }
}
