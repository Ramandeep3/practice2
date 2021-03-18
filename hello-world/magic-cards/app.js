const CARD_URL = `https://api.magicthegathering.io/v1/cards?pageSize=20`

function renderCard(card) {
    const cardElement = $(`<div class = "card">
            <h3 >${card.name} - ${card.manaCoast} < /h3> <
            h4 > ${card.type} < /h4> <
            h5 class = "set-name" > ${card.setName} < /h5>
            <pre > Flying, vigilance${card.text} < /pre>
            ${card.imageUrl ?`<img src="${card.imageUrl}">`:''}
        </div>`)
        cardElement.find('.set-name').data(('setName', card.set));
    return cardElement;
}


function renderCardList(cardList) {
   $('#results').empty();

   cardList.forEach(card=>{$('#results').append( renderCard(card) )

   });

}

function fetchCardList(url) {
    $('.searching').addClass('active');
    fetch(url)

    .then(response => response.json())
        .then(data => {
            renderCardList(data.cards);
            $('searching').removeClass('active');
        })

    .catch(error => console.log(error))
}
fetchCardList(CARD_URL)
$('#card-search').on('submit', function(event) {
    // prevent the form from actually submitting
    event.preventDefult();
    // read the `
    // cardName ` and `
    // cardText ` from #cname and #ctext
    const cardName = $('#cname').val();
    const cardText = $('#cText').val();
    // clear the values for the two elements
    $('#cname').val('');
    $('#cText').val('');

    // build the URL for fetchCardList
    const url = ` $ { CARD_URL } & name = $ { cardName } & text = $ { cardText }
            ` // call fetchCardList
    fetchCardList(url);
});


$('#results').on('click', '.card .set-name', function() {const setName = $(this).data('setName');
fetchCardList(`${ CARD_URL }&set=${ setName }`);});
function add(){
    return (x+y)
}