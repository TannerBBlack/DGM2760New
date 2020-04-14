

async function getHotelData() {
    try {
        const response = await fetch('../hotel.json')
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

document.querySelector('marriott').addEventListener('click', hotelInfo)

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })

    document.querySelector("#hotelName").textContent = `${hotelChoice.name}
    Hotel`
    
}