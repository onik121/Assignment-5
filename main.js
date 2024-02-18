


let seats = document.getElementsByClassName('steering');
let clickedCount = 0;

for (let seat of seats) {
    seat.addEventListener('click', function (){
        
        clickedCount += 1;
        if(clickedCount>=4) {
            for (let seat of seats) {
                seat.disabled = true;
            }
            let cuponBtn= document.getElementById('cupon-btn')
            document.getElementById('cupon').addEventListener('keyup', function(onik) {
                let text =onik.target.value;
                let cuponOne = "NEW15";
                let cuponTwo = "Cupole 20"
                let grandTicketPrice = document.getElementById('grand-total');
                let grandTicketPriceText = grandTicketPrice.innerHTML;
                let grandTicketPriceNumber = parseInt(grandTicketPriceText);
                if(text===cuponOne) {
                    cuponBtn.addEventListener('click', function(){
                        let cuponDiv = document.getElementById('cupon-div');
                        cuponDiv.classList.add('hidden')
                        let discountPrice = grandTicketPriceNumber*15/100;
                        let finalPrice = grandTicketPriceNumber - discountPrice;
                        grandTicketPrice.innerHTML = finalPrice;
                    })
                    cuponBtn.disabled = false;
                    cuponBtn.style.backgroundColor = '#1DD100';
                }
                else if(text===cuponTwo) {
                    cuponBtn.addEventListener('click', function(){
                        let cuponDiv = document.getElementById('cupon-div');
                        cuponDiv.classList.add('hidden')
                        let discountPrice = grandTicketPriceNumber*20/100;
                        let finalPrice = grandTicketPriceNumber - discountPrice;
                        grandTicketPrice.innerHTML = finalPrice;
                    })
                    cuponBtn.disabled = false;
                    cuponBtn.style.backgroundColor = '#1DD100';
                }
            });
        }

        // 
        let text = seat.innerHTML;
        let mainDiv = document.querySelector('.seat-div');
        let div = document.createElement('div');
        div.classList.add('jahid')
        let heading = document.createElement('p');
        heading.innerText = text;
        let para = document.createElement('p');
        para.innerHTML = 'Economoy';
        let para2 = document.createElement('p');
        para2.innerHTML = 550;
        mainDiv.appendChild(div);
        div.appendChild(heading);
        div.appendChild(para);
        div.appendChild(para2);


        // 
        let perTicketPrice = document.getElementById('per-Ticket-price');
        let ticketPriceText = perTicketPrice.innerHTML;
        let ticketPriceNumber = parseInt(ticketPriceText);
        let newperTicketPrice = ticketPriceNumber + 550;
        perTicketPrice.innerText = newperTicketPrice;

        // 
        let grandTicketPrice = document.getElementById('grand-total');
        let grandTicketPriceText = grandTicketPrice.innerHTML;
        let grandTicketPriceNumber = parseInt(grandTicketPriceText);
        let grandNewperTicketPrice = grandTicketPriceNumber + 550;
        grandTicketPrice.innerText = grandNewperTicketPrice;


        // 
        let totalSeat = document.getElementById('total-seats');
        let totalSeatText = totalSeat.innerText;
        let newSeat = totalSeatText - 1;
        totalSeat.innerText = newSeat;
        seat.disabled = true;
        seat.classList.add('seat-color');

        // 
        let seatCount = document.getElementById('seat-count');
        let seatCountText = seatCount.innerText;
        let scoreUpdate = parseInt(seatCountText);
        let seatCountNew = scoreUpdate + 1;
        seatCount.innerText = seatCountNew;

        // 
        var phoneInput = document.getElementById('phoneInput');
        var submitButton = document.getElementById('submitButton');
        phoneInput.addEventListener('input', function () {
            if (phoneInput.value.trim().length > 0 && !isNaN(phoneInput.value)) {
                submitButton.removeAttribute('disabled');
                submitButton.style.backgroundColor = '#1DD100';
            } 
            else {
                submitButton.setAttribute('disabled', 'disabled');
            }
        });
    })
};




