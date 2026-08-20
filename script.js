// ======================================================
// KRISHGOOOOO - COMPLETE JAVASCRIPT
// ======================================================


// ======================================================
// 1. GET HTML ELEMENTS
// ======================================================

const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");

const departureInput =
    document.getElementById("departure");

const passengersInput =
    document.getElementById("passengers");

const searchButton =
    document.getElementById("searchBtn");

const resultsSection =
    document.getElementById("results");

const resultsContainer =
    document.getElementById("resultsContainer");

const resultTitle =
    document.getElementById("resultTitle");


// ======================================================
// 2. MOBILE MENU
// ======================================================

const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.querySelector(".navbar");


if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("active");

    });

}


// ======================================================
// 3. CITY LIST
// ======================================================

const cities = [

    "Pune",
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Goa",
    "Jaipur",
    "Lucknow",
    "Ahmedabad",
    "Nashik",
    "Nagpur",
    "Surat",
    "Indore",
    "Udaipur"

];


// ======================================================
// 4. CITY SUGGESTIONS
// ======================================================

const fromSuggestions =
    document.getElementById("fromSuggestions");

const toSuggestions =
    document.getElementById("toSuggestions");


function showSuggestions(input, container) {

    if (!container) {
        return;
    }


    const value =
        input.value.toLowerCase().trim();


    container.innerHTML = "";


    if (value === "") {

        container.style.display = "none";

        return;

    }


    const filteredCities =
        cities.filter(function (city) {

            return city
                .toLowerCase()
                .includes(value);

        });


    if (filteredCities.length === 0) {

        container.style.display = "none";

        return;

    }


    filteredCities.forEach(function (city) {

        const suggestion =
            document.createElement("div");

        suggestion.className =
            "suggestion";

        suggestion.textContent =
            city;


        suggestion.addEventListener(
            "click",
            function () {

                input.value = city;

                container.style.display =
                    "none";

            }
        );


        container.appendChild(
            suggestion
        );

    });


    container.style.display =
        "block";

}


if (fromInput && fromSuggestions) {

    fromInput.addEventListener(
        "input",
        function () {

            showSuggestions(
                fromInput,
                fromSuggestions
            );

        }
    );

}


if (toInput && toSuggestions) {

    toInput.addEventListener(
        "input",
        function () {

            showSuggestions(
                toInput,
                toSuggestions
            );

        }
    );

}


// ======================================================
// 5. SWAP FROM AND TO
// ======================================================

const swapButton =
    document.getElementById("swapBtn");


if (swapButton) {

    swapButton.addEventListener(
        "click",
        function () {

            const temporary =
                fromInput.value;

            fromInput.value =
                toInput.value;

            toInput.value =
                temporary;

        }
    );

}


// ======================================================
// 6. SET MINIMUM DATE
// ======================================================

const today =
    new Date()
        .toISOString()
        .split("T")[0];


if (departureInput) {

    departureInput.min =
        today;

}


// ======================================================
// 7. SEARCH FUNCTION
// ======================================================

if (searchButton) {

    searchButton.addEventListener(
        "click",
        function () {

            const from =
                fromInput.value.trim();

            const to =
                toInput.value.trim();

            const departure =
                departureInput.value;

            const passengers =
                passengersInput.value;


            // ------------------------------------------
            // VALIDATE FROM
            // ------------------------------------------

            if (from === "") {

                alert(
                    "Please enter your departure city."
                );

                fromInput.focus();

                return;

            }


            // ------------------------------------------
            // VALIDATE TO
            // ------------------------------------------

            if (to === "") {

                alert(
                    "Please enter your destination."
                );

                toInput.focus();

                return;

            }


            // ------------------------------------------
            // SAME CITY CHECK
            // ------------------------------------------

            if (
                from.toLowerCase() ===
                to.toLowerCase()
            ) {

                alert(
                    "Departure and destination cannot be the same."
                );

                return;

            }


            // ------------------------------------------
            // DATE CHECK
            // ------------------------------------------

            if (departure === "") {

                alert(
                    "Please select your departure date."
                );

                departureInput.focus();

                return;

            }


            // ------------------------------------------
            // BUS DATA
            // ------------------------------------------

            const buses = [

                {
                    name: "KrishGoooo Express",
                    departure: "07:30 AM",
                    arrival: "01:30 PM",
                    price: 599
                },

                {
                    name: "KrishGoooo Comfort",
                    departure: "10:00 AM",
                    arrival: "04:30 PM",
                    price: 749
                },

                {
                    name: "KrishGoooo Night Rider",
                    departure: "09:30 PM",
                    arrival: "05:30 AM",
                    price: 899
                }

            ];


            // ------------------------------------------
            // CLEAR OLD RESULTS
            // ------------------------------------------

            resultsContainer.innerHTML =
                "";


            // ------------------------------------------
            // UPDATE RESULT TITLE
            // ------------------------------------------

            resultTitle.textContent =
                `${from} → ${to}`;


            // ------------------------------------------
            // CREATE BUS CARDS
            // ------------------------------------------

            buses.forEach(function (bus) {

                const busCard =
                    document.createElement("div");

                busCard.className =
                    "bus-result";


                busCard.innerHTML = `

                    <div class="bus-info">

                        <h3>
                            ${bus.name}
                        </h3>

                        <div class="bus-route">

                            ${from} → ${to}

                        </div>

                    </div>


                    <div class="bus-time">

                        ${bus.departure}
                        →
                        ${bus.arrival}

                    </div>


                    <div>

                        <div class="price">

                            ₹${bus.price}

                        </div>

                        <small>

                            ${passengers}
                            passenger(s)

                        </small>

                    </div>


                    <button
                        class="book-btn"
                        data-bus="${bus.name}"
                    >

                        Book

                    </button>

                `;


                resultsContainer.appendChild(
                    busCard
                );

            });


            // ------------------------------------------
            // SHOW RESULTS
            // ------------------------------------------

            resultsSection.scrollIntoView({

                behavior: "smooth"

            });

        }
    );

}


// ======================================================
// 8. SEAT SELECTION ELEMENTS
// ======================================================

const seatSection =
    document.getElementById("seatSection");

const selectedBusInfo =
    document.getElementById("selectedBusInfo");

const journeySummary =
    document.getElementById("journeySummary");

const selectedSeatsDisplay =
    document.getElementById("selectedSeats");

const totalPrice =
    document.getElementById("totalPrice");

const seats =
    document.querySelectorAll(".seat");


// ======================================================
// 9. SEAT VARIABLES
// ======================================================

let selectedSeats = [];

let selectedBusPrice = 0;


// ======================================================
// 10. BOOK BUTTON
// ======================================================

if (resultsContainer) {

    resultsContainer.addEventListener(
        "click",
        function (event) {

            if (
                event.target.classList.contains(
                    "book-btn"
                )
            ) {

                const busName =
                    event.target.dataset.bus;


                const busCard =
                    event.target.closest(
                        ".bus-result"
                    );


                const priceElement =
                    busCard.querySelector(
                        ".price"
                    );


                const priceText =
                    priceElement.textContent;


                selectedBusPrice =
                    parseInt(
                        priceText
                            .replace("₹", "")
                            .trim()
                    );


                // --------------------------------------
                // BUS INFORMATION
                // --------------------------------------

                if (selectedBusInfo) {

                    selectedBusInfo.textContent =
                        `${busName} | ${fromInput.value} → ${toInput.value}`;

                }


                if (journeySummary) {

                    journeySummary.textContent =
                        `${fromInput.value} → ${toInput.value}`;

                }


                // --------------------------------------
                // RESET SEATS
                // --------------------------------------

                selectedSeats = [];


                seats.forEach(function (seat) {

                    seat.classList.remove(
                        "selected"
                    );

                });


                updateSeatSummary();


                // --------------------------------------
                // SHOW SEAT SECTION
                // --------------------------------------

                if (seatSection) {

                    seatSection.style.display =
                        "block";


                    seatSection.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            }

        }
    );

}


// ======================================================
// 11. SEAT CLICK FUNCTION
// ======================================================

seats.forEach(function (seat) {

    seat.addEventListener(
        "click",
        function () {

            const seatNumber =
                this.dataset.seat;


            // ------------------------------------------
            // REMOVE SELECTED SEAT
            // ------------------------------------------

            if (
                selectedSeats.includes(
                    seatNumber
                )
            ) {

                selectedSeats =
                    selectedSeats.filter(
                        function (number) {

                            return number !==
                                seatNumber;

                        }
                    );


                this.classList.remove(
                    "selected"
                );

            }


            // ------------------------------------------
            // SELECT NEW SEAT
            // ------------------------------------------

            else {

                selectedSeats.push(
                    seatNumber
                );


                this.classList.add(
                    "selected"
                );

            }


            updateSeatSummary();

        }
    );

});


// ======================================================
// 12. UPDATE SEAT SUMMARY
// ======================================================

function updateSeatSummary() {

    if (!selectedSeatsDisplay) {
        return;
    }


    // ------------------------------------------
    // SELECTED SEATS
    // ------------------------------------------

    if (
        selectedSeats.length === 0
    ) {

        selectedSeatsDisplay.textContent =
            "None";

    }

    else {

        selectedSeatsDisplay.textContent =
            selectedSeats.join(", ");

    }


    // ------------------------------------------
    // TOTAL PRICE
    // ------------------------------------------

    const total =
        selectedSeats.length *
        selectedBusPrice;


    if (totalPrice) {

        totalPrice.textContent =
            `₹${total}`;

    }

}


// ======================================================
// 13. DESTINATION BUTTONS
// ======================================================

const destinationButtons =
    document.querySelectorAll(
        ".destination-btn"
    );


destinationButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const card =
                    this.closest(
                        ".destination-card"
                    );


                const city =
                    card.dataset.city;


                toInput.value =
                    city;


                const homeSection =
                    document.getElementById(
                        "home"
                    );


                if (homeSection) {

                    homeSection.scrollIntoView({

                        behavior: "smooth"

                    });

                }


                toInput.focus();

            }
        );

    }
);


// ======================================================
// 14. ABOUT BUTTON
// ======================================================

const aboutButton =
    document.getElementById("aboutBtn");


if (aboutButton) {

    aboutButton.addEventListener(
        "click",
        function () {

            const destinationSection =
                document.getElementById(
                    "destinations"
                );


            if (destinationSection) {

                destinationSection.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }
    );

}


// ======================================================
// 15. CLOSE CITY SUGGESTIONS
// ======================================================

document.addEventListener(
    "click",
    function (event) {

        if (
            fromInput &&
            fromSuggestions &&
            !fromInput.contains(
                event.target
            ) &&
            !fromSuggestions.contains(
                event.target
            )
        ) {

            fromSuggestions.style.display =
                "none";

        }


        if (
            toInput &&
            toSuggestions &&
            !toInput.contains(
                event.target
            ) &&
            !toSuggestions.contains(
                event.target
            )
        ) {

            toSuggestions.style.display =
                "none";

        }

    }
);