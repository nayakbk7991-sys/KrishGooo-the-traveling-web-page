console.log("KrishGoooo JavaScript is working!");
alert("NEW JAVASCRIPT LOADED");
// ==========================================
// KRISHGOOOOO - SEARCH FUNCTION
// ==========================================

// Get elements from HTML
const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");
const departureInput = document.getElementById("departure");
const passengersInput = document.getElementById("passengers");
const searchButton = document.getElementById("searchBtn");

const resultsSection = document.getElementById("results");
const resultsContainer = document.getElementById("resultsContainer");
const resultTitle = document.getElementById("resultTitle");


// ==========================================
// SET TODAY AS MINIMUM DEPARTURE DATE
// ==========================================

const today = new Date().toISOString().split("T")[0];

departureInput.min = today;


// ==========================================
// SEARCH BUTTON
// ==========================================

searchButton.addEventListener("click", function () {

    const from = fromInput.value.trim();
    const to = toInput.value.trim();
    const departure = departureInput.value;
    const passengers = passengersInput.value;


    // Check From
    if (from === "") {
        alert("Please enter your departure city.");
        fromInput.focus();
        return;
    }


    // Check To
    if (to === "") {
        alert("Please enter your destination.");
        toInput.focus();
        return;
    }


    // Check same city
    if (from.toLowerCase() === to.toLowerCase()) {

        alert(
            "Departure and destination cannot be the same."
        );

        return;
    }


    // Check date
    if (departure === "") {

        alert(
            "Please select your departure date."
        );

        departureInput.focus();

        return;
    }


    // ======================================
    // CREATE BUS RESULTS
    // ======================================

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


    // Clear previous results

    resultsContainer.innerHTML = "";


    // Update heading

    resultTitle.textContent =
        `${from} → ${to}`;


    // ======================================
    // DISPLAY BUSES
    // ======================================

    buses.forEach(function (bus) {

        const busCard =
            document.createElement("div");

        busCard.className = "bus-result";


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
                    ${passengers} passenger(s)
                </small>

            </div>


            <button
                class="book-btn"
                data-bus="${bus.name}"
            >
                Book
            </button>

        `;


        resultsContainer.appendChild(busCard);

    });


    // ======================================
    // SHOW RESULTS
    // ======================================

    resultsSection.scrollIntoView({
        behavior: "smooth"
    });

});


// ==========================================
// BOOK BUTTON
// ==========================================

resultsContainer.addEventListener(
    "click",
    function (event) {

        if (
            event.target.classList.contains("book-btn")
        ) {

            const busName =
                event.target.dataset.bus;


            alert(
                `You selected ${busName}.\n\n` +
                "Seat selection will be added next!"
            );

        }

    }
);