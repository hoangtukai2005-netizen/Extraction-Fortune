// Tự động tạo 150 ô (10x15) cho kho đồ Stash
const COLS = 10;
const ROWS = 15;
const stashGrid = document.getElementById('stash-grid');

for (let i = 0; i < (COLS * ROWS); i++) {
    const cell = document.createElement('div');
    cell.className = 'grid-cell';
    stashGrid.appendChild(cell);
}

// Xử lý luồng màn hình
const launcherScreen = document.getElementById('launcher-screen');
const introScreen = document.getElementById('intro-screen');
const introVideo = document.getElementById('intro-video');
const loadingScreen = document.getElementById('loading-screen');
const loadingBarFill = document.getElementById('loading-bar-fill');
const loadingPercent = document.getElementById('loading-percent');
const lobbyScreen = document.getElementById('lobby-screen');

const playBtn = document.getElementById('play-btn');
const startBtn = document.getElementById('start-btn');

// Khi bấm nút "CHƠI" ở Launcher
playBtn.addEventListener('click', () => {
    launcherScreen.classList.remove('active');
    introScreen.classList.add('active');

    introVideo.currentTime = 0;
    introVideo.play().catch(() => {
        // Nếu trình duyệt chặn phát tự động thì chuyển thẳng qua Loading
        startLoadingProcess();
    });
});

// Khi video chuyển cảnh phát xong
introVideo.addEventListener('ended', () => {
    startLoadingProcess();
});

// Hàm điều hướng thanh loading màu trắng
function startLoadingProcess() {
    introScreen.classList.remove('active');
    loadingScreen.classList.add('active');

    let currentPercent = 0;
    const loadingInterval = setInterval(() => {
        currentPercent += 2;
        if (currentPercent > 100) currentPercent = 100;

        loadingBarFill.style.width = currentPercent + '%';
        loadingPercent.textContent = currentPercent + '%';

        if (currentPercent === 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingScreen.classList.remove('active');
                lobbyScreen.classList.add('active');
            }, 300);
        }
    }, 40); // Tốc độ chạy thanh loading
}

// Sự kiện nút BẮT ĐẦU ở Lobby (tạm thời thông báo chuẩn bị vào trận)
startBtn.addEventListener('click', () => {
    alert("Đang ghép trận... (Tính năng vào trận sẽ được phát triển ở bước tiếp theo)");
});