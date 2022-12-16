
        let Poster =""
        let imagen=""
        function lim(){
            document.getElementById("tres").remove()
        }
        function buscar() {
          
            document.getElementById("uno").innerHTML=`
            
        <div class="row"  id="hola">
        <div class="col-3"></div>
        <div class="col-5">
            <h1 id="tit">CINOPOLIS</h1>
        </div>
        <div class="col-4" style="margin-top: 6px;" id="hola2">
        <div class="input-group">
        <input type="search" class="form-control rounded"  id="buscar2" placeholder="BUSCAR PELICULA " aria-label="Search" aria-describedby="search-addon" />
        <button   type="button" class="btn btn-outline-primary" onclick="buscar2()">Buscar</button>
      </div>
        </div>
        `
        document.getElementById("dos").innerHTML=`
        <div class="row">
            <div class="col-4">
                <img id="img" alt="" class="img-fluid">
            </div>
            <div class="col-6">
                <div class="div" id="prueba">
                <b id="title" ></b>(<b id="año"></b>)
                </div>
                <div class="div" style="margin-top: 5% ;">
                    <div class="row" >
                        <div class="col-4"> <section id="fecha">  </section> </div>
                        <div class="col-3"> <section id="Runtime"></section></div>
                        <div class="col-3"> <section id="Genre">  </section> </div>
                        <div class="col-2"><section id="type">    </section>   </div>
                    </div>
                </div>
                <hr>
                <div class="div" >
                    <p id="parrafo"></p>
                </div>
                <hr>
                <div class="div" style="margin-top: 10%;">
                    <div class="row">
                        <div class="col-5">
                            <div class="div">
                                <h3>Director</h3><hr>
                                <h5 id="director"> </h5>
                                <br>
                            </div>
                            <div class="div">
                            <br>
                            <br>
                            <h3>Escritor</h3> <hr>
                            <h5 id="escritor"></h5>
                            </div>
                            
                            
                        </div>
                        <div class="col-1"></div>
                        <div class="col-6">
                           <h3 style="display: flex;">Personajes principales</h3><hr>
                            <section id="actor1"></section>
                            <section id="actor2"></section>
                            <section id="actor3"></section>

                            <div class="div">
                            <br>
                            <h3>Raiting</h3><hr>
                            <section id="rati"></section>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
            
        </div>
        `
        let buscar = document.getElementById("buscar").value
        console.log(buscar);

    axios.get(`http://www.omdbapi.com/?t=${buscar}&apikey=6b45ded9`)
    .then(res=>{
        console.log(res);
        console.log("ok");
        document.getElementById("title").innerText =res.data.Title
        document.getElementById("img").src = res.data.Poster
        var imagen=res.data.Poster
        document.body.style.backgroundImage= `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 50)),url('${imagen} ')`
        document.getElementById("parrafo").innerText = res.data.Plot
        document.getElementById("año").innerText = res.data.Year
        document.getElementById("parrafo").innerText = res.data.Plot
        document.getElementById("director").innerText = res.data.Director
        document.getElementById("type").innerText = res.data.Type
        document.getElementById("Runtime").innerText = res.data.Runtime
        Poster = res.data.Actors
        document.getElementById("title").innerText =res.data.Title
        document.getElementById("fecha").innerHTML =res.data.Released
        document.getElementById("escritor").innerText = res.data.Writer
        document.getElementById("Genre").innerText= res.data.Genre
        document.getElementById("rati").innerText = res.data.imdbRating

        actores()
    })
    .catch(err=>{
        console.log(err);
        console.log("no");
    })
    function actores() {
        let arr = Poster.split(",")
        console.log(arr);

        document.getElementById("actor1").innerText = arr[0]    
        document.getElementById("actor2").innerText = arr[1]            
        document.getElementById("actor3").innerText = arr[2]            
}
    }


function buscar2() {
    
    let buscar2 = document.getElementById("buscar2").value
    console.log(buscar2);

axios.get(`http://www.omdbapi.com/?t=${buscar2}&apikey=6b45ded9`)
.then(res=>{
    console.log(res);
    console.log("ok");
    document.getElementById("title").innerText =res.data.Title
    document.getElementById("img").src = res.data.Poster
    var imagen=res.data.Poster
    document.body.style.backgroundImage= `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 50)),url('${imagen} ')`
    document.getElementById("parrafo").innerText = res.data.Plot
    document.getElementById("año").innerText = res.data.Year
    document.getElementById("parrafo").innerText = res.data.Plot
    document.getElementById("director").innerText = res.data.Director
    document.getElementById("type").innerText = res.data.Type
    document.getElementById("Runtime").innerText = res.data.Runtime
    Poster = res.data.Actors
    document.getElementById("title").innerText =res.data.Title
    document.getElementById("fecha").innerHTML =res.data.Released
    document.getElementById("escritor").innerText = res.data.Writer
    document.getElementById("Genre").innerText= res.data.Genre
    actores()
    validaciones()
})
.catch(err=>{
    console.log(err);
    console.log("no");
})
function actores() {
    let arr = Poster.split(",")
    console.log(arr);

    document.getElementById("actor1").innerText = arr[0]    
    document.getElementById("actor2").innerText = arr[1]            
    document.getElementById("actor3").innerText = arr[2]

}
}

function validaciones() {
    let buscar2 = document.getElementById("buscar2").value
    let buscar = document.getElementById("buscar").value

    if(buscar2 || buscar ==="" ){
        document.getElementById("tres").innerHTML
    }
    
}