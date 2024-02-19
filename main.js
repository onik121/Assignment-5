


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
            cuponBtn.disabled = false;
            cuponBtn.style.backgroundColor = '#1DD100';
            cuponBtn.addEventListener('click', function() {
                let cupon = document.getElementById('cupon');
                let cuponText = cupon.value;
                let cuponOne = "NEW15";
                let cuponTwo = "Cupole 20"
                let grandTicketPrice = document.getElementById('grand-total');
                let grandTicketPriceText = grandTicketPrice.innerHTML;
                let grandTicketPriceNumber = parseInt(grandTicketPriceText);
                if(cuponOne === cuponText) {
                    let cuponDiv = document.getElementById('cupon-div');
                    cuponDiv.classList.add('hidden')
                    let discountPrice = grandTicketPriceNumber*15/100;
                    let finalPrice = grandTicketPriceNumber - discountPrice;
                    grandTicketPrice.innerHTML = finalPrice;
                }

                else if(cuponText===cuponTwo) {
                    let cuponDiv = document.getElementById('cupon-div');
                    cuponDiv.classList.add('hidden')
                    let discountPrice = grandTicketPriceNumber*20/100;
                    let finalPrice = grandTicketPriceNumber - discountPrice;
                    grandTicketPrice.innerHTML = finalPrice;
                }
            
                else{
                    alert('Wrong Cupon Code')
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
        let contentHides = document.getElementsByClassName('content-hide');
        for (let contentHide of contentHides) {
            // console.log(contentHide)
        }


        // 
        let submitButton = document.getElementById('submitButton');
        if (clickedCount>=1) {
            submitButton.style.backgroundColor = '#1DD100';
            submitButton.removeAttribute('disabled');
        }

    
        // let numberInput = document.getElementById('phoneInput');
        // let Button = document.getElementById('submitButton');
        // Button.addEventListener('click', function() {
        //     let inputValue = numberInput.value;
        //     let numberValue = parseFloat(inputValue);

        //     if (!isNaN(numberValue)) {
        //         let contentHides = document.getElementsByClassName('content-hide');
        //         let contentshow = document.getElementById('content-show');
        //         for (let contentHide of contentHides) {
        //             contentHide.classList.add('hidden')
        //             contentshow.classList.remove('hidden');
        //         }
        //     }
        //     else {
        //         alert('Please Enter Your Number')
        //     }
        // });


    });
};




let numberInput = document.getElementById('phoneInput');
let Button = document.getElementById('submitButton');
Button.addEventListener('click', function() {
    let inputValue = numberInput.value;
    let numberValue = parseFloat(inputValue);

    if (!isNaN(numberValue)) {
        let contentHides = document.getElementsByClassName('content-hide');
        let contentshow = document.getElementById('content-show');
        for (let contentHide of contentHides) {
            contentHide.classList.add('hidden')
            contentshow.classList.remove('hidden');
        }
    }
    else {
        alert('Please Enter Your Number')
    }
});