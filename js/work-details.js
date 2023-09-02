function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function loadWorkDetails(workId) {
	const workDetails = {
		borseMare: {
			title: "Borse da Mare",
			headImg: "./asset/images/borse/_MG_2688.jpg",
            text: "Al giorno d’oggi ha luogo la scomparsa di ciò che ci sta di fronte: la totale assenza di un “essere contro” non rappresenta una condizione ideale, poichè senza questo scontro si ricade dolorosamente su sé stessi.",
            images: [
                "./asset/images/borse/_MG_2688.jpg",
                "./asset/images/borse/_MG_2710.jpg",
                "./asset/images/borse/_MG_2725.jpg",
                "./asset/images/borse/_MG_2754.jpg",
                "./asset/images/borse/_MG_2765.jpg",
                "./asset/images/borse/_MG_2775.jpg",
                "./asset/images/borse/_MG_2780.jpg",
                "./asset/images/borse/_MG_2790.jpg",
                "./asset/images/borse/_MG_2804.jpg",
                "./asset/images/borse/_MG_2817 copia.jpg",
                "./asset/images/borse/_MG_2817.jpg",
                "./asset/images/borse/_MG_2834.jpg",
            ],
        },
		zeintaAdMer: {
			title: "Zeinta Ad Mer",
			headImg:"./asset/images/zeinta/v968-17dg-02-mockup.png",
            text: "Al giorno d’oggi ha luogo la scomparsa di ciò che ci sta di fronte: la totale assenza di un “essere contro” non rappresenta una condizione ideale, poichè senza questo scontro si ricade dolorosamente su sé stessi.",
            images: [
                "./asset/images/zeinta/Brusiness_Card_Mockup_009.jpg",
                "./asset/images/zeinta/Busbbiness_Card_Mockup_009.jpg",
                "./asset/images/zeinta/Business_Card_Mockup_008-e.jpg",
                "./asset/images/zeinta/Business_Card_Mockup_009.jpg",
                "./asset/images/zeinta/Business_Ccard_Mockup_009.jpg",
                "./asset/images/zeinta/Buuusiness_Card_Mockup_009.jpg",
                "./asset/images/zeinta/II.jpg",
                "./asset/images/zeinta/nnn.jpg",
                "./asset/images/zeinta/nnnnnnnn.jpg",
                "./asset/images/zeinta/v968-17d-02-mockup.png",
            ],
        },
    }

	const work = workDetails[workId];
	if (work) {
		const workDetailsContainer = document.getElementById("workDetailsContainer");

        let imagesHtml = '';
        if (work.images && work.images.length > 0) {
            for (let i = 0; i < work.images.length; i++) {
                imagesHtml += `
                    <div class="col-6 workGalleryCont"><img src="${work.images[i]}" loading="lazy" class="imgFit"></div>
                `;
            }
        }
		workDetailsContainer.innerHTML = `
        <div class="workHeaderImgCont">
            <img src="${work.headImg}"class="imgFit">
        </div>
        <div class="row d-flex mt-4">
            <div class="col-md-4 col-12">
                <div class="titleWorkDetail">${work.title}</div>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-6 col-12">
                <div class="ibmMonoSmall ibmItalic">
                    ${work.text}
                </div>
            </div>
        </div>
        <div class="row g-2 mt-3">
            ${imagesHtml}
        </div>
        `
	}
}

// Chiamata alla funzione di caricamento dei dettagli del lavoro quando il documento è pronto
document.addEventListener("DOMContentLoaded", () => {
    const workId = getUrlParameter('work');
    console.log(workId)
    let workIdElement = document.getElementById(workId)
    workIdElement.classList.add("activeWork")
    loadWorkDetails(workId);
});
