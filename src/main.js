// Instantiation of defaults destinations
let defaultDestinations = [];
// We call the persistance.php file to retrieve the list of destinations stored in source.json
$.ajax({
    url: "src/datas/persistance.php",
    type:"GET",
}).done((arg) => {
    // Once we retrieve the json datas, we parse it and generate a destination object for each one received
    let jsonAnswer = JSON.parse(arg);
    for(const toto in jsonAnswer){
        let dest = jsonAnswer[toto];
        // Finally we add the newly generated Destination in destinations list
        defaultDestinations.push(new Destination(
            dest['destination'], 
            dest['photo'], 
            dest['circuit'], 
            dest['tarif'],
            dest['id']
        ));
        ;
    }
});

// Variables allowing us to know if the user is connected
let isConnected = false;

// Variable allowing us to know the user name (helps us to see if he is an admin or not)
let utilisateur = '';

// Constant variable which contains the html code of the index page
const index = `
    <div class="m-4">
    <h2>Description générale</h2>
    <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dicta? Quae quisquam, consequuntur veritatis suscipit quidem, natus optio aut adipisci cupiditate, fuga eveniet! Neque nemo dolorem aut aliquid corrupti quos.</blockquote>
    <p>
        <em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam aliquam laudantium cum accusamus libero. Quam sed molestias est similique inventore earum rem eius, deserunt dolor ducimus culpa officiis. Iste!</em>
    </p>
    <hr>
    <h3>Infos pratiques</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laudantium illum eos suscipit nisi explicabo qui, tempora sapiente dolor distinctio ipsa aperiam alias accusamus, ex dolores molestias delectus odit ipsam?</p>
    </div>
`;

// Constant variable which contains the html code of the Destinations page
let destinations =`
    <div id="addNewDestBtn"></div>
    <div class="container ms-lg-2 me-lg-2 mt-4">
        <div id="destList" class="row justify-content-center"></div>
    </div>
    <button id="up" class="btn btn-primary d-flex justify-content-center align-items-center" onclick="goTop()">
        <span class="material-symbols-outlined">arrow_upward</span>
    </button>
`;

// Constant variable which contains the html code of the Espace perso/Mes informations page
const perso = `
    <div class="card mt-5" id="card">
        <div class="card-body d-flex justify-content-center flex-column align-items-center">
        <h3 class="card-title mb-4">Espace perso</h3>
        <ul class="card-text">
            <li>Connexion</li>
            <li>Mes informations
                <ul>
                    <li>Martin Martin</li>
                    <li>0606060606</li>
                    <li>martin.martin@martin.com</li>
                </ul>
            </li>
            <li>Messagerie</li>
            <li>Historique</li>
        </ul>
        </div>
    </div>
`;

// Constant variable which contains the html code of the Voyage virtuel audio page
const voyage_audio = `
    <div class="mt-5">
    <div>
        <h2>Sons de crickets</h2>
        <audio controls autoplay muted>
            <source src="medias/audio/crickets-By-Tuna.mp3"></audio>
        </audio> 
    </div>
    <hr>
    <div>
        <h2>Feu de camp</h2>
        <a href="medias/audio/feuer.mp3">Ecouter</a>
    </div>
    <hr>
    <div>
        <h2>Bruits de pluie</h2>
        <a href="medias/audio/rain01.mp3">Ecouter</a>
    </div>
    <hr>
    <div>
        <h2>Son d'ambiance plage</h2>
        <a href="medias/audio/oceanwave.mp3">Ecouter</a>
    </div>
    </div>
`;

// Constant variable which contains the html code of the Voyage virtuel video page
const voyage_video = `
    <div class="m-4">
    <h3>Indonésie</h3>
    <video controls autoplay width="320px" height="240px" muted>
        <source src="medias/video/ind.mp4" type="video/mp4">
    </video> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, consequuntur, corrupti iure temporibus rem voluptatem accusamus amet reprehenderit, laudantium minima sequi in! Dignissimos sint, accusantium iure et, ipsam distinctio necessitatibus recusandae suscipit aliquam hic cum fuga omnis! Labore, nesciunt sunt dolor cumque optio repellat illum magni obcaecati sequi in fugiat quae velit provident enim iste omnis commodi nemo officiis suscipit dolores incidunt repellendus laudantium! Iure nam rem rerum est dolores error beatae doloremque alias eum veritatis qui autem quod enim suscipit ipsum, a placeat iste, sed hic eius ea. Possimus numquam modi minus maiores dolor laboriosam esse, tempora nihil nostrum, officiis excepturi corporis exercitationem iste commodi ipsum soluta. Quia corporis vitae, ratione natus quasi expedita quo rerum totam ex provident officia ut illum quibusdam sunt minima qui deleniti aliquam voluptas magnam architecto quidem facilis et recusandae explicabo! Quibusdam amet accusantium fugit minus rerum quos consequatur sit maxime dolor numquam! Modi nostrum sunt at aliquam, illum quod harum itaque. Reprehenderit corrupti sequi optio in incidunt veniam impedit! Perspiciatis dolore itaque maiores dolores commodi quos pariatur nisi voluptatibus, rerum voluptas, vero deleniti debitis quo tempora optio unde vel veritatis magni dicta harum laboriosam porro perferendis consectetur a. Quidem ab sequi alias pariatur! Repellat excepturi omnis quae qui, quia dolorum. Nostrum recusandae magni illum unde quidem minima quibusdam eveniet qui exercitationem facere. Facere, sequi! Magnam molestiae tenetur blanditiis? Magni excepturi praesentium error hic, odit qui illum dolorem.</p>
    </div>
    <div class="m-4">
    <h3>Indonésie</h3>
    <video controls width="320px" height="240px" >
        <source src="medias/video/swz.mp4" type="video/mp4">
    </video> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, consequuntur, corrupti iure temporibus rem voluptatem accusamus amet reprehenderit, laudantium minima sequi in! Dignissimos sint, accusantium iure et, ipsam distinctio necessitatibus recusandae suscipit aliquam hic cum fuga omnis! Labore, nesciunt sunt dolor cumque optio repellat illum magni obcaecati sequi in fugiat quae velit provident enim iste omnis commodi nemo officiis suscipit dolores incidunt repellendus laudantium! Iure nam rem rerum est dolores error beatae doloremque alias eum veritatis qui autem quod enim suscipit ipsum, a placeat iste, sed hic eius ea. Possimus numquam modi minus maiores dolor laboriosam esse, tempora nihil nostrum, officiis excepturi corporis exercitationem iste commodi ipsum soluta. Quia corporis vitae, ratione natus quasi expedita quo rerum totam ex provident officia ut illum quibusdam sunt minima qui deleniti aliquam voluptas magnam architecto quidem facilis et recusandae explicabo! Quibusdam amet accusantium fugit minus rerum quos consequatur sit maxime dolor numquam! Modi nostrum sunt at aliquam, illum quod harum itaque. Reprehenderit corrupti sequi optio in incidunt veniam impedit! Perspiciatis dolore itaque maiores dolores commodi quos pariatur nisi voluptatibus, rerum voluptas, vero deleniti debitis quo tempora optio unde vel veritatis magni dicta harum laboriosam porro perferendis consectetur a. Quidem ab sequi alias pariatur! Repellat excepturi omnis quae qui, quia dolorum. Nostrum recusandae magni illum unde quidem minima quibusdam eveniet qui exercitationem facere. Facere, sequi! Magnam molestiae tenetur blanditiis? Magni excepturi praesentium error hic, odit qui illum dolorem.</p>
    </div>

`;

// Constant variable which contains the html code of the Contact page
const contact = `
    <div class="card mt-4" id="card">
    <form class="card-body" method="post">
        <div class="mb-3">
            <label class="form-label" for="nom">Nom et Prénom</label>
            <input class="form-control" type="text" id="nom" required>
        </div>
        <div class="mb-3">
            <label class="form-label" for="email">Adresse mail</label>
            <input class="form-control" type="email" id="email" required>
        </div>    
        <div class="mb-3">
            <label class="form-label" for="tel">Numéro de téléphone</label>
            <input class="form-control" type="tel" id="tel" pattern="[0]{1}[0-9]{9}" required>
        </div>
        <div class="mb-3">
            <label class="form-label" for="msg">Message</label>
            <input class="form-control" type="text" id="msg" required>
        </div>
        <button type="submit" class="btn btn-outline-primary">Envoyer</button>
    </form>
    </div>
`

// Constant variable which contains the html code of the Nouvelle destinations/modification d'une destination page
const destInfos = `
    <div class="card mt-4 formForDest">
    <form class="card-body" method="post" id="formEvent">
        <div>
            <label class="form-label" for="destination">Destination : </label>
            <input class="form-control" type="text" id="destination" name="destination" required>
            <div id="nameWarning" class="form-text mb-2">
        </div>
        <div>
            <label class="form-label" for="photo">Photo : </label>
            <img class="mb-2" id="imgChoosed" src=""/>
            <input class="mb-2 form-control" onchange="showImage()" type="file" id="photo" name="photo">
        </div>
        <div>
            <label class="form-label" for="circuit">Circuit (séparer les activités par des virgules) : </label>
            <textarea class="form-control mb-2" id="circuit" name="circuit" required placeholder="Activité1,Activité2,Activité3,..."></textarea>
        </div>
        <div>
            <label class="form-label" for="tarif">Prix : </label>
            <input class="form-control" type="number" id="tarif" name="tarif" required>
            <div id="tarifWarning" class="form-text mb-2"></div>
        </div>
        <button class="btn btn-outline-primary" id="submitDestInfos" type="submit"></button>
    </form>
    </div>
`

// Sets the default page displayed to 'index' page, we have to use window.onload to be able to find the element with
// 'main' id (without it, the action is done before the html page is loaded and it causes an error)
window.onload = (() => {
    document.getElementById('main').innerHTML = index;
    $("#loginModal").on('shown.bs.modal', () => {
        setupFormEvent();
    })
})

// Displays the stored image of the destination for the destination creation/modification page
async function showImage(){
    let file = document.getElementById('photo').files[0];
    let fileLink = await readFile(file);
    document.getElementById('imgChoosed').src = fileLink;
}

// Reads the image file uploaded by the user in the destination creation/modification page
function readFile(file){
    return new Promise((resolve, reject) => {
      var fr = new FileReader();  
      fr.onload = () => {
        resolve(fr.result )
      };
      fr.onerror = reject;
      fr.readAsDataURL(file);
    });
}

// Checks if a destination name passed in parameters already exists or if it's unique
function nameIsUnique(name){
    console.log('toto');
    let nameIsExisting = defaultDestinations.filter(value => value.getDestination.toLowerCase() == name.toLowerCase());
    return nameIsExisting.length==0;
}

// Sets the current page to the destInfos page and sets the registering of a destination's info into a new destination object
function newDest(){
    document.getElementById('main').innerHTML = destInfos;
    let form = document.getElementById('formEvent');
    document.getElementById('photo').required = true;
    document.getElementById('submitDestInfos').innerText = "Créer";
    form.addEventListener('submit', async (event) => {
        // we do event.preventDefault to prevent the page to reload when the user sends the form
        event.preventDefault();
        // We reinitialize the helpers text and color to avoid error indication if there is none
        $("#tarifWarning").css('color', 'black');
        $("#tarifWarning").text('');
        $("#nameWarning").css('color', 'black');
        $("#nameWarning").text("");
        
        // We check if the price indicated is higher than zero and if the destination name inputed
        // does not exists, if both statements are true, we create the destination object
        if(form.elements['tarif'].value>0 && nameIsUnique(form.elements["destination"].value)){
            //the next five lines generate an array containing all steps of a 'circuit' 
            let circuitTmp = form.elements["circuit"].value.split(' ').join("");
            let circuitSplitted = circuitTmp.split(',');
            let circuitFiltered = circuitSplitted.filter((el) => {
                return !!el;
            });
            let file    = await readFile(document.getElementById('photo').files[0]);
            let newDest = new Destination(form.elements['destination'].value, file,
                circuitFiltered, form.elements['tarif'].value, defaultDestinations[defaultDestinations.length-1].getId+1);
            // Once we created the destination object, we call the persistance.php file with an action of update to 
            // modify the source.json file
            $.ajax({
                url: "src/datas/persistance.php",
                type: "POST",
                data: {
                    data: JSON.stringify(newDest.toJSObject()),
                    action: "update"
                }
            }).done((arg) => {
                // Once the ajax request is finished, we go back to destinations page and add the new destination to 
                // the destinations list
                defaultDestinations.push(newDest);
                setupDestinations(false);
                })
        }
        // else we show a text below the wrong inputs showing the user what's wrong
        else {
            if(form.elements['tarif'].value<=0){
                $("#tarifWarning").css('color', 'red');
                $("#tarifWarning").text('Tarif entré invalide');
            }
            if(!nameIsUnique(form.elements['destination'].value)){
                $("#nameWarning").css('color', 'red');
                $("#nameWarning").text("Ce nom existe déjà");
            }
        }
        
    })
}

// Deletes a destination from the destinations page
function delDest(id){
    // we filter the destinations list to only keep the destinations with an id different from the one
    // the user wants to delete
    defaultDestinations = defaultDestinations.filter(dest => dest.id!=id);
    // We call the persistance.php file with an action of delete and the id of the destination to delete
    // to update the source.json file
    $.ajax({
        url: "src/datas/persistance.php",
        type: "POST",
        data: {
            data: id,
            action: "delete"
        }
    }).done( () => {
        // Once the request is done, we push refresh the destinations page
        setupDestinations(false)
    });

}

// Displays the destInfos page and loads all the informations of the destination the user wants to edit
function editDest(id){
    document.getElementById('main').innerHTML = destInfos;
    document.getElementById('submitDestInfos').innerText = "Modifier"
    let destToEdit = defaultDestinations[defaultDestinations.findIndex(value => value.getId == id)];
    // we set the required attribute to false for the picture because when we load the already existing picture,
    // it's nnot possible to set it in the file input
    document.getElementById('photo').required = false;
    document.getElementById('destination').value = destToEdit.getDestination;
    document.getElementById('imgChoosed').src    = destToEdit.getPhoto;
    document.getElementById('circuit').value     = destToEdit.getCircuit.join(',');
    document.getElementById('tarif').value       = destToEdit.getTarif;
    document.getElementById('formEvent').addEventListener('submit', async (event) => {
        event.preventDefault();
        let form = document.getElementById('formEvent');
        // We reinitialize the helpers text and color to avoid error indication if there is none
        $("#tarifWarning").css('color', 'black');
        $("#tarifWarning").text('');
        $("#nameWarning").css('color', 'black');
        $("#nameWarning").text("");
        // We check if the price indicated is higher than zero and if the destination name inputed
        // does not exists, if both statements are true, we modify the destination object
        if(form.elements['tarif'].value>0 && nameIsUnique(form.elements["destination"].value)){
            let circuitTmp = form.elements["circuit"].value.split(' ').join("");
            console.log(circuitTmp);
            let circuitSplitted = circuitTmp.split(',');
            console.log(circuitSplitted);
            let circuitFiltered = circuitSplitted.filter((el) => {
            return !!el;
            });
            if(document.getElementById('photo').files[0]){
                destToEdit.setPhoto = await readFile(document.getElementById('photo').files[0]);
            }
            destToEdit.setCircuit = circuitFiltered;
            destToEdit.setDestination = form.elements['destination'].value;
            destToEdit.setTarif = form.elements['tarif'].value;
            // Once we modified the destination object, we call the persistance.php file with an action of update to 
            // modify the source.json file
            $.ajax({
                url: "src/datas/persistance.php",
                type: "POST",
                data: {
                    data: JSON.stringify(destToEdit.toJSObject()),
                    action: "update"
                }
            }).done((arg) => {
                    setupDestinations(false);
                })
        } 
        // else we show a text below the wrong inputs showing the user what's wrong
        else {
            if(form.elements['tarif'].value<=0){
                $("#tarifWarning").css('color', 'red');
                $("#tarifWarning").text('Tarif entré invalide');
            }
            if(!nameIsUnique(form.elements['destination'].value)){
                $("#nameWarning").css('color', 'red');
                $("#nameWarning").text("Ce nom existe déjà");
            }
        }
        
    });

}

// Generate destinations cards for each destination in the destinations list
function setupDestinations(navbarNeedsToClose = true){
    if(navbarNeedsToClose){
        switchPage(destinations);
    } else {
        $('#main').html(destinations);
    }
    for(const dest of defaultDestinations){
        let rowToAdd = `
        <div class="card p-0 col-10 col-sm-8 col-lg-5 col-xxl-3 me-md-4 mb-4" id="dest">
            <img style="width:320px; height:270px;" src="`+ dest.getPhoto +`" alt="">
            <div class="card-body">
                <h4 class="card-title text-center">` + dest.getDestination+`</h3>
                <h6 class="card-subtitle text-center text-muted ">Prix : ` + dest.getTarif + ` euros</h6>
                <div class="card-text">
                    <ul>`;
                    for(const i in dest.getCircuit){
                        rowToAdd+="<li>"+dest.getCircuit[i]+"</li>";
                    }
                    rowToAdd +=
                    `</ul>
                </div>
            </div>`;
            rowToAdd += isConnected ? `
            <div class="card-footer d-flex justify-content-between mb-1 pt-2">` +
                (utilisateur == 'user' ? `<div class="">
                    <button type="button" class="btn btn-success">Réserver</button>
                </div>` : '') : '';
            rowToAdd += (utilisateur=='admin' ? 
                `<div class="">
                    <button type="button" onclick="editDest(${dest.getId})" class="btn btn-primary">Modifier</i></button>
                    <button type="button" onclick="delDest(${dest.getId})" class="btn btn-danger">Supprimer</i></button>
                </div>` : '') + `
            </div>
        </div>`
        $('#destList').html($('#destList').html()+rowToAdd);
    }
}

// Method called when the login popup is displayed to setup the form action
function setupFormEvent(){
    $("#loginForm").on('submit', (e) => {
        e.preventDefault();
        checkCredentials();
    })
}

// disconnects the user (by simply refreshing the page)
function disconnect(){
    window.location.reload();
}

// Push the user to the top of the page
function goTop(){
    window.scrollTo(0,0);
}

// Checks the credentials inputed by the user in the login form
function checkCredentials(){
    let username = $("#user").val();
    let password = $("#pass").val();
    let infoUser = $('#informUser');
    infoUser.text('');
    infoUser.css('color', 'black');
    // we call the connexion.php file to check if the credentials inputed are correct
    $.ajax({
            url: "src/auth/connexion.php",
            type:"POST",
            data: {
                login: username,
                password: password
            }
        }).done(function (arg){
            // Once it's done, we check what's returned by the file
            // If it contains the text 'erreur' we show a text in red telling the user his credentials are wrong
            if(arg.includes('Erreur')){
                infoUser.text('Erreur, vérifiez vos informations');
                infoUser.css('color', 'red');
            } 
            // If the connection went well, we show the 'Espace perso' menu, hide the connection button
            // and add the buttons corresponding to each role (user or admin)
            else {
                isConnected = true;
                utilisateur = username;
                $('#loginModalBody').html(arg);
                $('#connexion').html('');
                $('#usersData').html(
                    `<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Espace perso
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" onclick="switchPage(perso)" href="#">Mes informations</a></li>
                        <li><a class="dropdown-item" href="#">Messagerie</a></li>
                        <li><a class="dropdown-item" href="#">Historique</a></li>
                        <li><a class="dropdown-item" onclick="disconnect()" href="#">Déconnexion</a></li>
                    </ul>`
                );
                if(utilisateur == 'admin'){
                    destinations = '<button id="add_new" class="btn btn-primary mt-4" onclick="newDest()">Nouvelle destination</button>' + destinations;
                }
                // if the user is logging in while being on the destinations page, we refresh the page
                if($('#destList').length){
                    setupDestinations();
                }
                    
            }
        }
    )
}

// Changes the 'main' div innerHtml to html code of the page the user wants to visit
function switchPage(page){
    //the next lines untoggle the navbar if it has been toggled (only for tablet and mobile modes)
    if(document.documentElement.clientWidth<992){
        const menuToggle = $('#navbarSupportedContent');
        const bsCollapse = new bootstrap.Collapse(menuToggle);
        console.log(bsCollapse);
        bsCollapse.toggle();
    }
    $('#main').html(page);
}

