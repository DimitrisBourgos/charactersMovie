'use strict'
console.log("hello");


var myModal = new bootstrap.Modal(document.getElementById('leptomeries'), {
    keyboard: false
});

fetch(`https://rickandmortyapi.com/api/character`)
            .then(response=>response.json())
            .then(data=>{
                console.log(data.results);
                // console.log(data);
                createMovies(data.results);
});
            
const createMovies= (data) =>{
        let htmlMovie='';
        let status='';
        data.forEach(m=>{
            
            if(m.status === "Alive"){
               status=`<img width="7px" height="7px" src="data:image/png;base64,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" />`
            }else{
                 status=`<img width="11px" height="7px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkG-x8zOM2RgPCfY_5vp7D5lQaj4k9wP0nOr5k4Nc5JJ-tiVuu461G6S3orUNDykElak4&usqp=CAU"/>`
            }
            htmlMovie+=`<div class="col col-sm ">

                <div class="card mb-4 text-center" style="max-width: 230px; ">
                    <img src="${m.image}" class="card-img-right" alt="${m.name}">
                    <div class="card-body">
                        <h5 class="card-title">${m.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${status} ${m.status} - ${m.species}</li>
                    </ul>
                    
                    <div class="card-body">
                        <a href="#" class="card-link text-decoration-none" onclick="fetchExtra(${m.id})">View Character</a>
                    </div>
                                
                </div>
            </div>`;
        });
        document.querySelector('#movies').innerHTML=htmlMovie;
    }

    const fetchExtra = (id)=> {
        // fetch(`https://rickandmortyapi.com/api/character/?id=${id}`)
        fetch(`https://rickandmortyapi.com/api/character/${id}`).then(res => res.json()).then(data => {
            if(data.status === "Alive"){
                status=`<img width="7px" height="7px" src="data:image/png;base64,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" />`
             }else{
                  status=`<img width="11px" height="7px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkG-x8zOM2RgPCfY_5vp7D5lQaj4k9wP0nOr5k4Nc5JJ-tiVuu461G6S3orUNDykElak4&usqp=CAU"/>`
             }
            document.querySelector('#image').innerHTML = `<img style="margin:0 auto;" width="143px;" src="${data.image}"/>`;
            document.querySelector('.modal-title').innerHTML = data.name;
            // document.querySelector('.modal-title').innerHTML = data.image;
            document.querySelector('#nameCard').innerHTML =`${status}`+ " "+  data.status +" - " + data.species ;

            document.querySelector('#card-movie').innerHTML = "Gender: "+
            `<img width='15px' height='15px' src='https://image.flaticon.com/icons/png/512/1340/1340619.png'/>
            ` + " " + data.gender+"<br>"+ "Last seen location: "+data.location.name+"<br>"+
            "Number of episodes appeared: " + data.episode.length;
            
            myModal.show();
           
        });
        // fetch(`https://rickandmortyapi.com/api/location/${id}`).then(res => res.json()).then(data => {
        //         console.log("locaiton"+`${data.location}`);

        //     });

        
        
    }

    const page=(pages)=>{
        console.log(pages+1);
        document.querySelector('#pages').innerHTML=pages;


    }

    