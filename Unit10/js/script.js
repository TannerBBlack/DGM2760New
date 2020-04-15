

async function getHotelData() {
    try {
        const response = await fetch('hotel.json')
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

let anchors = document.querySelectorAll("a")

anchors.forEach(anchor => {
    anchor.addEventListener('click', hotelInfo)
});

// document.querySelector("#marriott").addEventListener('click', hotelInfo)

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })

    document.querySelector("#hotelName").textContent = `${hotelChoice.name} Hotel`

    document.querySelector("#address").textContent = `${hotelChoice.address}`
    document.querySelector("#rooms").textContent = `${hotelChoice.rooms}`
    document.querySelector("#gym").textContent = `${hotelChoice.gym}`
    document.querySelector("#type").textContent = `${hotelChoice.roomTypes}`
    document.querySelector("#picture").setAttribute('src', `images/${hotelChoice.picture}`)
}