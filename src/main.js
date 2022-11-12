let defaultDestinations = [
    new Destination(
        'France', 
        'medias/img/fr.jpg', 
        ['Paris', 'Mont Saint Michel', 'Lyon', 'Nice'], 
        2,
        0
    ),
    new Destination(
        'Italie', 
        'medias/img/it.jpg', 
        ['Rome', 'Venise', 'Turin'], 
        2,
        1
    ),
    new Destination(
        'Islande', 
        'medias/img/isl.jpg', 
        ['Neige'], 
        2,
        2
    ),
    new Destination(
        'Nouvelle-Zélande', 
        'medias/img/nz.jpg', 
        ['Moutons'], 
        2,
        3
    ),

];



const index = `
    <div class="ms-4 mt-4">
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

const destinations = `
    <button id="add_new" onclick="switchPage('nvDest')">Nouvelle destination</button>
    <table id="destinations">
    <thead>
        <tr>
            <th>Destination</th>
            <th>Photo</th>
            <th>Circuit</th>
            <th>Tarif</th>
            <th>Actions</th>
            <th>Réservation</th>
        </tr>
        <tr>
            <th></th>
        </tr>
    </thead>
    </table> 
    <button id="up"><a href="#">&#8593;</a></button>
`;

const perso = `
    <div class="card">
        <h1>Espace perso</h1>
        <ul>
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
`;

const voyage_audio = `
    <div>
        <h2>Sons de crickets</h2>
        <audio controls autoplay muted>
            <source src="medias/audio/crickets-By-Tuna.mp3" type="medias/audio/mp3"></audio>
        </audio> 
    </div>
    <hr>
    <div>
        <h2>Musique mélancolique à écouter au bord de la plage</h2>
        <a href="medias/audio/guts-theme-By-Tuna.mp3">Ecouter</a>
    </div>
    <hr>
    <div>
        <h2>Musique d'ambiance vieille salle des fêtes</h2>
        <a href="medias/audio/the-backrooms-By-Tuna.mp3">Ecouter</a>
    </div>
    <hr>
    <div>
        <h2>Son d'ambiance plage</h2>
        <a href="medias/audio/oceanwave.mp3">Ecouter</a>
    </div>
`;

const voyage_video = `
    <h3>Indonésie</h3>
    <video controls autoplay width="320px" height="240px" muted>
        <source src="medias/video/ind.mp4" type="video/mp4">
    </video> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, consequuntur, corrupti iure temporibus rem voluptatem accusamus amet reprehenderit, laudantium minima sequi in! Dignissimos sint, accusantium iure et, ipsam distinctio necessitatibus recusandae suscipit aliquam hic cum fuga omnis! Labore, nesciunt sunt dolor cumque optio repellat illum magni obcaecati sequi in fugiat quae velit provident enim iste omnis commodi nemo officiis suscipit dolores incidunt repellendus laudantium! Iure nam rem rerum est dolores error beatae doloremque alias eum veritatis qui autem quod enim suscipit ipsum, a placeat iste, sed hic eius ea. Possimus numquam modi minus maiores dolor laboriosam esse, tempora nihil nostrum, officiis excepturi corporis exercitationem iste commodi ipsum soluta. Quia corporis vitae, ratione natus quasi expedita quo rerum totam ex provident officia ut illum quibusdam sunt minima qui deleniti aliquam voluptas magnam architecto quidem facilis et recusandae explicabo! Quibusdam amet accusantium fugit minus rerum quos consequatur sit maxime dolor numquam! Modi nostrum sunt at aliquam, illum quod harum itaque. Reprehenderit corrupti sequi optio in incidunt veniam impedit! Perspiciatis dolore itaque maiores dolores commodi quos pariatur nisi voluptatibus, rerum voluptas, vero deleniti debitis quo tempora optio unde vel veritatis magni dicta harum laboriosam porro perferendis consectetur a. Quidem ab sequi alias pariatur! Repellat excepturi omnis quae qui, quia dolorum. Nostrum recusandae magni illum unde quidem minima quibusdam eveniet qui exercitationem facere. Facere, sequi! Magnam molestiae tenetur blanditiis? Magni excepturi praesentium error hic, odit qui illum dolorem.</p>
    <h3>Indonésie</h3>
    <video controls width="320px" height="240px" >
        <source src="medias/video/swz.mp4" type="video/mp4">
    </video> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, consequuntur, corrupti iure temporibus rem voluptatem accusamus amet reprehenderit, laudantium minima sequi in! Dignissimos sint, accusantium iure et, ipsam distinctio necessitatibus recusandae suscipit aliquam hic cum fuga omnis! Labore, nesciunt sunt dolor cumque optio repellat illum magni obcaecati sequi in fugiat quae velit provident enim iste omnis commodi nemo officiis suscipit dolores incidunt repellendus laudantium! Iure nam rem rerum est dolores error beatae doloremque alias eum veritatis qui autem quod enim suscipit ipsum, a placeat iste, sed hic eius ea. Possimus numquam modi minus maiores dolor laboriosam esse, tempora nihil nostrum, officiis excepturi corporis exercitationem iste commodi ipsum soluta. Quia corporis vitae, ratione natus quasi expedita quo rerum totam ex provident officia ut illum quibusdam sunt minima qui deleniti aliquam voluptas magnam architecto quidem facilis et recusandae explicabo! Quibusdam amet accusantium fugit minus rerum quos consequatur sit maxime dolor numquam! Modi nostrum sunt at aliquam, illum quod harum itaque. Reprehenderit corrupti sequi optio in incidunt veniam impedit! Perspiciatis dolore itaque maiores dolores commodi quos pariatur nisi voluptatibus, rerum voluptas, vero deleniti debitis quo tempora optio unde vel veritatis magni dicta harum laboriosam porro perferendis consectetur a. Quidem ab sequi alias pariatur! Repellat excepturi omnis quae qui, quia dolorum. Nostrum recusandae magni illum unde quidem minima quibusdam eveniet qui exercitationem facere. Facere, sequi! Magnam molestiae tenetur blanditiis? Magni excepturi praesentium error hic, odit qui illum dolorem.</p>

`;

const contact = `
    <form method="post">
        <p>
            <label for="nom">Nom et Prénom</label>
            <input type="text" id="nom" required>
        </p>
        <p>
            <label for="email">Adresse mail</label>
            <input type="email" id="email" required>
        </p>
        <p>
            <label for="tel">Numéro de téléphone</label>
            <input type="tel" id="tel" pattern="[0]{1}[0-9]{9}" required>
        </p>
        <p>
            <label for="msg">Message</label>
            <input type="text" id="msg" required>
        </p>
        <button>Envoyer</button>
    </form>
`

const nvDest = `
    <form method="post" class="formEvent">
        <label for="destination">Destination : </label><br>
        <input type="text" id="destination" name="destination" required><br>
        <label for="photo">Photo : </label><br>
        <img id="imgChoosed" src=""/><br>
        <input onchange="showImage()" type="file" id="photo" name="photo"><br>
        <label for="circuit">Circuit (séparer les activités par des virgules) : </label><br>
        <textarea id="circuit" name="circuit" required placeholder="Activité1,Activité2,Activité3,..."></textarea><br>
        <label for="tarif">Prix : </label><br>
        <input type="number" id="tarif" name="tarif" required><br>
        <input type="submit" value="Créer">
    </form>
`

const updateDest = `
    <form method="post" class="formEvent">
        <label for="destination">Destination : </label><br>
        <input type="text" id="destination" name="destination" required><br>
        <label for="photo">Photo : </label><br>
        <img id="imgChoosed" src=""/><br>
        <input onchange="showImage()" type="file" id="photo" name="photo"><br>
        <label for="circuit">Circuit (séparer les activités par des virgules) : </label><br>
        <textarea id="circuit" name="circuit" required placeholder="Activité1,Activité2,Activité3,..."></textarea><br>
        <label for="tarif">Prix : </label><br>
        <input type="number" id="tarif" name="tarif" required><br>
        <input type="submit" value="Enregistrer">
    </form>
`

var currentPage = '';
window.onload = () => {
if(!currentPage){
    console.log(document.getElementsByTagName('div'));
    document.getElementById('main').innerHTML = index;
}

    
let linksInNavbar = document.getElementById('navbar').children;
for(const a of linksInNavbar){
    if(a.children.length == 0){
        console.log(a.innerHTML)
        // a.addEventListener('click', switchPage(a.tagName));
    } 
}
}

async function showImage(){
    let file = document.getElementById('photo').files[0];
    let fileLink = await readFile(file);
    document.getElementById('imgChoosed').src = fileLink;
}

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

function delDest(id){
    defaultDestinations = defaultDestinations.filter(dest => dest.id!=id);
    switchPage('destinations');
}

function editDest(id){
    switchPage('updateDest');
    let destToEdit = defaultDestinations[defaultDestinations.findIndex(value => value.getId == id)];
    document.getElementById('photo').required = false;
    document.getElementById('destination').value = destToEdit.getDestination;
    document.getElementById('imgChoosed').src    = destToEdit.getPhoto;
    document.getElementById('circuit').value     = destToEdit.getCircuit.join(',');
    document.getElementById('tarif').value       = destToEdit.getTarif;
    document.getElementsByClassName('formEvent')[0].addEventListener('submit', async (event) => {
        let form = document.getElementsByClassName('formEvent')[0];
        event.preventDefault();
        let circuitTmp = form.elements["circuit"].value;
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
        switchPage('destinations');
    });

}

function switchPage(page){
    document.getElementById('main').innerHTML = eval(page);
    currentPage = page;
    if(currentPage == 'destinations'){
        for(const dest of defaultDestinations){
            let rowToAdd = `
            <tr>
                <td>` + dest.getDestination+`</td>
                <td>
                    <img style="width:250px;" src="`+ dest.getPhoto +`" alt="">
                </td>
                <td class="circuit">
                    <ul>`;
                        for(const i in dest.getCircuit){
                            rowToAdd+="<li>"+dest.getCircuit[i]+"</li>";
                        }
                    rowToAdd += 
                    `</ul>
                </td>
                <td class="tdToMakeBigger">` + dest.getTarif + ` euros</td>
                <td>
                    <div class="actions">
                        <span onclick="editDest(${dest.getId})" class="material-icons">edit_note</span>
                        <span onclick="delDest(${dest.getId})" class="material-icons">delete</span>
                    </div>
                </td>
                <td>
                    <div class="resa">
                        <div></div>
                        <button>Réserver</button>
                    </div>
                </td>
            </tr>`
            document.getElementById('destinations').innerHTML += rowToAdd;
        }
    }
    else if(currentPage == 'nvDest'){
        let form = document.getElementsByClassName('formEvent')[0];
        document.getElementById('photo').required = true;
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            let circuitTmp = form.elements["circuit"].value;
            console.log(circuitTmp);
            let circuitSplitted = circuitTmp.split(',');
            console.log(circuitSplitted);
            let circuitFiltered = circuitSplitted.filter((el) => {
                return !!el;
            });
            let file    = await readFile(document.getElementById('photo').files[0]);
            let newDest = new Destination(form.elements['destination'].value, file,
                circuitFiltered, form.elements['tarif'].value, defaultDestinations[defaultDestinations.length-1].getId+1);
            defaultDestinations.push(newDest);
            switchPage('destinations');
        })
    }
}

