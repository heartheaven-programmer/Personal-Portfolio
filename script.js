/* =========================================================
   HEART HEAVEN PORTFOLIO JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       MOBILE MENU
    ========================================================= */
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    menuToggle?.addEventListener("click", () => {
        const isOpen = nav?.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        const icon = menuToggle.querySelector("i");
        if (isOpen) {
            icon?.classList.remove("fa-bars");
            icon?.classList.add("fa-xmark");
        } else {
            icon?.classList.remove("fa-xmark");
            icon?.classList.add("fa-bars");
        }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            nav?.classList.remove("open");
            menuToggle?.setAttribute("aria-expanded", "false");
            const icon = menuToggle?.querySelector("i");
            icon?.classList.remove("fa-xmark");
            icon?.classList.add("fa-bars");
        });
    });

    /* =========================================================
       THEME TOGGLES
    ========================================================= */
    const themeToggle = document.querySelector("#themeToggle");
    themeToggle?.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        themeToggle.textContent = isDark ? "☀" : "☾";
        localStorage.setItem("heartHeavenTheme", isDark ? "dark" : "light");
    });

    if (localStorage.getItem("heartHeavenTheme") === "dark") {
        document.body.classList.add("dark");
        if (themeToggle) themeToggle.textContent = "☀";
    }

    const colorToggle = document.querySelector("#colorToggle");
    colorToggle?.addEventListener("click", () => {
        document.body.classList.toggle("soft-mode");
        const isSoft = document.body.classList.contains("soft-mode");
        localStorage.setItem("heartHeavenColor", isSoft ? "soft" : "normal");
    });

    if (localStorage.getItem("heartHeavenColor") === "soft") {
        document.body.classList.add("soft-mode");
    }

    /* =========================================================
       NAVIGATION & SCROLL
    ========================================================= */
    const sections = [...document.querySelectorAll("main section[id]")];
    const navLinks = [...document.querySelectorAll(".nav-links a")];

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    const target = link.getAttribute("href");
                    link.classList.toggle("active", target === `#${entry.target.id}`);
                });
            }
        });
    }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });

    sections.forEach(section => observer.observe(section));

    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (!navbar) return;
        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetID = link.getAttribute("href");
            if (!targetID || targetID === "#") return;
            const target = document.querySelector(targetID);
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    const year = document.querySelector("#year");
    if (year) year.textContent = new Date().getFullYear();

    /* =========================================================
       PROFILE IMAGE TOGGLE
    ========================================================= */
    const changeImgBtn = document.getElementById('changeImgBtn');
    const profileImg = document.getElementById('profileImage');
    let isOriginalImg = true;

    if (changeImgBtn && profileImg) {
        changeImgBtn.addEventListener('click', () => {
            // Fade out
            profileImg.style.opacity = '0';
            
            setTimeout(() => {
                if (isOriginalImg) {
                    // Replace 'my-image.jpg' with the path to your actual image
                    profileImg.src = 'my-image.jpg'; 
                } else {
                    profileImg.src = 'cat.webp';
                }
                isOriginalImg = !isOriginalImg;
                profileImg.style.opacity = '1';
            }, 300);
        });
    }

    /* =========================================================
       HIDE BIOGRAPHY & READ MORE
    ========================================================= */
    const toggleBioBtn = document.getElementById('toggleBio');
    const bioText = document.querySelector('.bio-text');

    if (toggleBioBtn && bioText) {
        toggleBioBtn.addEventListener('click', () => {
            const paragraphs = bioText.querySelectorAll('p');
            if (toggleBioBtn.textContent === 'Hide Biography') {
                paragraphs.forEach(p => p.style.display = 'none');
                toggleBioBtn.textContent = 'Show Biography';
            } else {
                paragraphs.forEach(p => p.style.display = 'block');
                toggleBioBtn.textContent = 'Hide Biography';
            }
        });
    }

    const readMoreBtn = document.getElementById('readMoreBtn');
    const reflectionText = document.querySelector('.reflection-text');

    if (readMoreBtn && reflectionText) {
        const reflectionParagraphs = reflectionText.querySelectorAll('p');
        
        if (reflectionParagraphs.length > 2) {
            reflectionParagraphs[1].style.display = 'none';
            reflectionParagraphs[2].style.display = 'none';
        }

        readMoreBtn.addEventListener('click', () => {
            if (readMoreBtn.textContent === 'Read More') {
                reflectionParagraphs.forEach(p => p.style.display = 'block');
                readMoreBtn.textContent = 'Read Less';
            } else {
                if (reflectionParagraphs.length > 2) {
                    reflectionParagraphs[1].style.display = 'none';
                    reflectionParagraphs[2].style.display = 'none';
                }
                readMoreBtn.textContent = 'Read More';
            }
        });
    }

    /* =========================================================
       SAY HI MODAL
    ========================================================= */
    const sayHiBtn = document.getElementById('sayHiBtn');
    const hiModal = document.getElementById('hiModal');
    const closeModal = document.getElementById('closeModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const hiMessage = document.getElementById('hiMessage');

    const greetings = [
        "Hiii! 🐾 Thanks for visiting!",
        "Meow! 🐱 You're pawsome!",
        "Hello there! ✨",
        "Sending you good vibes! 💗",
        "Hi! 👋 Feel free to look around!",
        "Welcome to my little corner! 🌸"
    ];

    if (sayHiBtn && hiModal) {
        sayHiBtn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * greetings.length);
            hiMessage.textContent = greetings[randomIndex];
            hiModal.classList.add('show');
        });

        const closeModalFunc = () => hiModal.classList.remove('show');
        closeModal.addEventListener('click', closeModalFunc);
        closeModalBtn.addEventListener('click', closeModalFunc);
        hiModal.addEventListener('click', (e) => {
            if (e.target === hiModal) closeModalFunc();
        });
    }

    /* =========================================================
       PROJECTS FILTER & CAROUSEL
    ========================================================= */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.getElementById('projectsGrid');
    const scrollLeftBtn = document.getElementById('scrollLeftBtn');
    const scrollRightBtn = document.getElementById('scrollRightBtn');

    // Initial setup: show all
    projectCards.forEach(card => card.classList.add('show'));

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            // Filter cards
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.classList.add('show');
                } else {
                    card.classList.remove('show');
                }
            });
            
            // Reset scroll
            projectsGrid.scrollLeft = 0;
        });
    });

    if (scrollLeftBtn && scrollRightBtn && projectsGrid) {
        scrollLeftBtn.addEventListener('click', () => {
            projectsGrid.scrollBy({ left: -350, behavior: 'smooth' });
        });
        scrollRightBtn.addEventListener('click', () => {
            projectsGrid.scrollBy({ left: 350, behavior: 'smooth' });
        });
    }

    /* =========================================================
       ANIMATED QUOTES
    ========================================================= */
    const quotes = document.querySelectorAll('.quote-slide');
    const dots = document.querySelectorAll('.quote-dots .dot');
    let currentQuote = 0;

    function showQuote(index) {
        quotes.forEach(q => q.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        
        quotes[index].classList.add('active');
        dots[index].classList.add('active');
    }

    if (quotes.length > 0) {
        setInterval(() => {
            currentQuote = (currentQuote + 1) % quotes.length;
            showQuote(currentQuote);
        }, 8000); // 8 seconds
    }

    /* =========================================================
       MINI GAME: MINESWEEPER
    ========================================================= */
    const grid = document.getElementById('minesweeperGrid');
    const minesCountDisplay = document.getElementById('minesCount');
    const flagsCountDisplay = document.getElementById('flagsCount');
    const resetGameBtn = document.getElementById('resetGame');
    const gameMessage = document.getElementById('gameMessage');

    if (grid) {
        const rows = 8;
        const cols = 8;
        const totalMines = 10;
        let board = [];
        let flags = 0;
        let gameOver = false;

        function initGame() {
            grid.innerHTML = '';
            board = [];
            flags = 0;
            gameOver = false;
            gameMessage.textContent = '';
            flagsCountDisplay.textContent = flags;
            minesCountDisplay.textContent = totalMines;

            // Create empty board logic
            for (let r = 0; r < rows; r++) {
                let row = [];
                for (let c = 0; c < cols; c++) {
                    row.push({
                        isMine: false,
                        isRevealed: false,
                        isFlagged: false,
                        count: 0,
                        element: null
                    });
                }
                board.push(row);
            }

            // Place mines randomly
            let minesPlaced = 0;
            while (minesPlaced < totalMines) {
                const r = Math.floor(Math.random() * rows);
                const c = Math.floor(Math.random() * cols);
                if (!board[r][c].isMine) {
                    board[r][c].isMine = true;
                    minesPlaced++;
                }
            }

            // Calculate numbers
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (!board[r][c].isMine) {
                        let count = 0;
                        for (let i = -1; i <= 1; i++) {
                            for (let j = -1; j <= 1; j++) {
                                const nr = r + i;
                                const nc = c + j;
                                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc].isMine) {
                                    count++;
                                }
                            }
                        }
                        board[r][c].count = count;
                    }
                }
            }

            // Render board to DOM
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const cell = document.createElement('div');
                    cell.classList.add('cell');
                    cell.dataset.r = r;
                    cell.dataset.c = c;
                    
                    cell.addEventListener('click', () => handleLeftClick(r, c));
                    cell.addEventListener('contextmenu', (e) => {
                        e.preventDefault();
                        handleRightClick(r, c);
                    });

                    board[r][c].element = cell;
                    grid.appendChild(cell);
                }
            }
        }

        function handleLeftClick(r, c) {
            if (gameOver || board[r][c].isRevealed || board[r][c].isFlagged) return;

            if (board[r][c].isMine) {
                // Game Over
                revealAllMines();
                gameMessage.textContent = "Boom! Game Over 💥";
                gameMessage.style.color = "#ff4d6d";
                gameOver = true;
            } else {
                revealCell(r, c);
                checkWin();
            }
        }

        function handleRightClick(r, c) {
            if (gameOver || board[r][c].isRevealed) return;
            
            const cellData = board[r][c];
            if (!cellData.isFlagged && flags < totalMines) {
                cellData.isFlagged = true;
                cellData.element.classList.add('flagged');
                cellData.element.textContent = "🚩";
                flags++;
            } else if (cellData.isFlagged) {
                cellData.isFlagged = false;
                cellData.element.classList.remove('flagged');
                cellData.element.textContent = "";
                flags--;
            }
            flagsCountDisplay.textContent = flags;
        }

        function revealCell(r, c) {
            if (r < 0 || r >= rows || c < 0 || c >= cols) return;
            
            const cellData = board[r][c];
            if (cellData.isRevealed || cellData.isFlagged) return;

            cellData.isRevealed = true;
            cellData.element.classList.add('revealed');

            if (cellData.count > 0) {
                cellData.element.textContent = cellData.count;
                cellData.element.dataset.count = cellData.count;
            } else {
                // Recursively reveal adjacent cells if empty
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        revealCell(r + i, c + j);
                    }
                }
            }
        }

        function revealAllMines() {
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (board[r][c].isMine) {
                        board[r][c].element.classList.add('mine');
                        board[r][c].element.textContent = "💣";
                    }
                }
            }
        }

        function checkWin() {
            let revealedCount = 0;
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (board[r][c].isRevealed) revealedCount++;
                }
            }
            if (revealedCount === (rows * cols) - totalMines) {
                gameMessage.textContent = "You Win! 🎉";
                gameMessage.style.color = "#10b981";
                gameOver = true;
            }
        }

        resetGameBtn.addEventListener('click', initGame);
        initGame(); // Start game on load
    }

    /* =========================================================
       MUSIC PLAYER
    ========================================================= */
    const musicFab = document.getElementById('musicFab');
    const musicPlayer = document.getElementById('musicPlayer');
    const closeMusic = document.getElementById('closeMusic');
    
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPause');
    const prevTrackBtn = document.getElementById('prevTrack');
    const nextTrackBtn = document.getElementById('nextTrack');
    const currentCover = document.getElementById('currentCover');
    const currentTitle = document.getElementById('currentTitle');
    const currentArtist = document.getElementById('currentArtist');
    const playlistEl = document.getElementById('playlist');
    const musicProgress = document.getElementById('musicProgress');
    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');

    // Sample tracks (Use public domain/free audio URLs for testing)
       // Sample tracks (Use public domain/free audio URLs for testing)
    const tracks = [
        {
            title: "Above All",
            artist: "Natasha Midori",
            src: "./Music/Above All Natashia Midori Official lyric video.mp3", // Or use the original filename if you didn't rename it
            cover: "Music/above all.webp"
        },
        {
            title: "MY Mai TONIGHT",
            artist: "Aqours",
            src: "./Music/Aqours MY Mai TONIGHT MY 舞 TONIGHT lit MY Dance TONIGHT Color Coded Kanji Romaji Eng.mp3",
            cover: "Music/aquor.jpg"
        },
        {
            title: "FIRE BIRD",
            artist: "Roselia (Bang Dream)",
            src: "./Music/BanG Dream FILM LIVE Roselia ー FIRE BIRD.mp3",
            cover: "Music/roselia.jpg"
        },
        {
            title: "Beautiful Saviour",
            artist: "Natasha Midori",
            src: "./Music/Beautiful Saviour Natashia Midori Official lyric video.mp3",
            cover: "Music/beautiful saviour.jpg"
        },
        {
            title: "Broken Vessels",
            artist: "Natasha Midori",
            src: "./Music/Broken Vessels Natashia Midori Official lyric video.mp3",
            cover: "Music/broken vessel.webp"
        },
        {
            title: "Hoshi no Uta",
            artist: "Fairy Tail",
            src: "./Music/Fairy Tail Hoshiboshi No Uta Lyra s Song lyrics english sub.mp3",
            cover: "Music/hoshi no uta.jpg"
        },
        {
            title: "Heart of Worship",
            artist: "Natasha Midori",
            src: "./Music/Heart of Worship Natashia Midori Official lyric video.mp3",
            cover: "Music/heart of worship.jpg"
        },
        {
            title: "I Need You More",
            artist: "Natasha Midori",
            src: "./Music/I Need You More Natashia Midori Official lyric video.mp3",
            cover: "Music/i need you more.jpg"
        },
        {
            title: "Worthy Is The Lamb",
            artist: "Natasha Midori",
            src: "./Music/Worthy Is The Lamb Natashia Midori Official lyric video.mp3",
            cover: "Music/worthy is the lamb.jpg"
        },
        {
            title: "Mori no Chiisana Restaurant",
            artist: "Aoi Teshima",
            src: "./Music/手嶌葵 森の小さなレストラン Official Audio.mp3",
            cover: "Music/mori choiisina restaurant.webp"
        },
        {
            title: "Baby you",
            artist: "Yuka",
            src: "./Music/有華 Baby you Music Video Yuka Ver.mp3",
            cover: "Music/baby you.jpg"
        }
    ];

    let trackIndex = 0;
    let isPlaying = false;

    function loadTrack(index) {
        const track = tracks[index];
        audioPlayer.src = track.src;
        currentTitle.textContent = track.title;
        currentArtist.textContent = track.artist;
        currentCover.src = track.cover;
        
        // Update playlist active state
        document.querySelectorAll('#playlist li').forEach((li, i) => {
            li.classList.toggle('active', i === index);
        });

        if (isPlaying) {
            audioPlayer.play();
        }
    }

    function renderPlaylist() {
        playlistEl.innerHTML = '';
        tracks.forEach((track, i) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${track.title}</span> <span>${track.artist}</span>`;
            li.addEventListener('click', () => {
                trackIndex = i;
                loadTrack(trackIndex);
                playAudio();
            });
            playlistEl.appendChild(li);
        });
    }

    function playAudio() {
        isPlaying = true;
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }

    function pauseAudio() {
        isPlaying = false;
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }

    // UI Toggles
    musicFab?.addEventListener('click', () => {
        musicPlayer.classList.toggle('show');
        if (musicPlayer.classList.contains('show') && !audioPlayer.src) {
            loadTrack(trackIndex);
        }
    });

    closeMusic?.addEventListener('click', () => {
        musicPlayer.classList.remove('show');
    });

    // Controls
    playPauseBtn?.addEventListener('click', () => {
        if (isPlaying) pauseAudio();
        else playAudio();
    });

    prevTrackBtn?.addEventListener('click', () => {
        trackIndex = (trackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(trackIndex);
        playAudio();
    });

    nextTrackBtn?.addEventListener('click', () => {
        trackIndex = (trackIndex + 1) % tracks.length;
        loadTrack(trackIndex);
        playAudio();
    });

    // Progress bar
    audioPlayer?.addEventListener('timeupdate', () => {
        const current = audioPlayer.currentTime;
        const duration = audioPlayer.duration;
        
        if (duration) {
            const progressPercent = (current / duration) * 100;
            musicProgress.value = progressPercent;
            
            // Format time
            const formatTime = (time) => {
                if (isNaN(time)) return "0:00";
                const mins = Math.floor(time / 60);
                const secs = Math.floor(time % 60);
                return `${mins}:${secs.toString().padStart(2, '0')}`;
            };
            
            currentTimeEl.textContent = formatTime(current);
            totalTimeEl.textContent = formatTime(duration);
        }
    });

    musicProgress?.addEventListener('input', () => {
        const duration = audioPlayer.duration;
        if (duration) {
            audioPlayer.currentTime = (musicProgress.value / 100) * duration;
        }
    });

    audioPlayer?.addEventListener('ended', () => {
        nextTrackBtn.click();
    });

    // Initialize playlist
    if (playlistEl) {
        renderPlaylist();
    }

    console.log("Heart Heaven Portfolio loaded successfully 💗");
});