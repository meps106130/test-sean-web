function toggleNightMode() {
    // 切換夜間模式樣式
    document.body.classList.toggle('night-mode');

    // 根據當前模式更新按鈕文字
    const nightModeButton = document.getElementById('nightModeButton');
    if (document.body.classList.contains('night-mode')) {
        nightModeButton.innerText = 'Toggle technology Mode';
    } else {
        nightModeButton.innerText = 'Toggle night Mode';
    }
}

// 初始化時檢查模式並設定按鈕文字
window.onload = function() {
    const nightModeButton = document.getElementById('nightModeButton');
    if (document.body.classList.contains('night-mode')) {
        nightModeButton.innerText = '切換科幻模式';
    } else {
        nightModeButton.innerText = '切換夜間模式';
    }
};


// 更改語言
// function changeLanguage(selectElement) {
//     const language = selectElement.value;

//     // 更新語言顯示內容
//     if (language === 'en') {
//         document.getElementById('homeButton').innerText = 'Home';
//         document.getElementById('aboutButton').innerText = 'About Me';
//         document.getElementById('contactButton').innerText = 'Contact';
//         document.getElementById('questionButton').innerText = 'Ask a Question';
//         document.getElementById('nightModeButton').innerText = 'Toggle technology Mode';

//         pages.home = `
//             <h2>Hello!</h2>
//             <p>I am Sean, welcome to my personal website</p>
//             <h2>.</h2>
//             <h2>.</h2>
//             <h2>.</h2>
//             <h2>.</h2>
//             <h2>.</h2>
//             <h2>.</h2>
//             <h2>.</h2>
//             <h2>.</h2>
//             <h2>.</h2>
//             <h2>.</h2>
//             <h2>.</h2>
//             <h2>XD</h2>
//         `;
//         pages.about = `
//             <h2>About Me</h2>
//             <ul>
//                 <li><strong>Interests:</strong> Programming, Reading, Gaming</li>
//                 <li><strong>Birthday:</strong> February 23, 2011</li>
//                 <li><strong>star_signs: </strong>Pisces♓</li>
//                 <li><strong>personality: </strong>idk(I don't know)😗</li>
//                 <li><strong>Programming Languages:</strong> Python, C, C++, HTML, CSS, JavaScript (not very good)</li>
//             </ul>
//             <h2>Certifications/Competitions</h2>
//             <ul>
//                 <li>APCS : 4+3</li>
//                 <li>2023: YTP Preliminary round NO.8</li>
//                 <li>2024: YTP final NO.8</li>
//                 <a href="https://apcs.csie.ntnu.edu.tw/">APCS</a>
//             </ul>
//             <h2>Licenses</h2>
//             <ul>
//                 <li>Microsoft Technology Associate(python)<h5>(when Fifth grade)</h5></li>
//             </ul>
//             <h2>my friend web</h2>
//             <ul>
//                 <li><a href="https://hung-liu.github.io/">hung's web</a></li>
//             </ul>
//             <h2>Image</h2>
//             <img src="MTA.png"/>
//         `;
//         pages.contact = `
//             <h2>Contact Me</h2>
//             <ul>
//                 <li><strong>Gmail:</strong><a href="mailto:seanhsieh0223@gmail.com">seanhsieh0223@gmail.com</a></li>
//                 <li><strong>Discord:</strong> seanhsieh0223@gmail.com</li>
//                 <li><strong>ig: </strong><a href="https://www.instagram.com/seanh_code/?hl=zh-tw">seanh_code</a></li>
//                 <h2>.</h2>
//                 <h2>.</h2>
//                 <h2>.</h2>
//                 <h2>.</h2>
//                 <h2>.</h2>
//                 <h2>.</h2>
//                 <h2>.</h2>
//                 <h2>.</h2>
//                 <h2>.</h2>
//                 <h2>.</h2>
//                 <h2>.</h2>
//                 <h2>HI</h2>
//             </ul>

//         `;
//         pages.question = `
//             <h2>Ask a Question</h2>
//             <form id="questionForm">
//                 <label for="userName">Your Name:</label>
//                 <input type="text" id="userName" name="from_name" required>

//                 <label for="userEmail">Your Email:</label>
//                 <input type="email" id="userEmail" name="from_email" required>

//                 <label for="userQuestion">Your Question:</label>
//                 <textarea id="userQuestion" name="message" rows="5" required></textarea>

//                 <button type="submit">Submit Question</button>
//             </form>
//             <div id="formStatus" style="display: none;"></div>
//         `;
//         pages.thankYou = `
//             <h2>Thank You for Your Question!</h2>
//             <p>We have received your question and will respond as soon as possible.</p>
//         `;
//     }
// };

// 初始化 EmailJS
(function() {
    emailjs.init('EKv9vDoRS816xS0Yb');
})();

// 按鈕觸發的表單提交處理
function sub(event) {
    event.preventDefault();  // 阻止表單的默認提交行為

    const form = document.getElementById('questionForm');
    const formStatus = document.getElementById('formStatus');
    formStatus.style.display = 'block';
    formStatus.innerHTML = '正在提交您的問題...';

    // 使用 emailjs 提交表單
    emailjs.sendForm('service_za8o36i', 'template_p22yav2', form)
        .then(function(response) {
            // 提交成功後跳轉
            window.location.href = 'thx.html';  // 跳轉到感謝頁面
        }, function(error) {
            formStatus.innerHTML = '提交時發生錯誤，請稍後再試！';
        });
}

// 綁定表單提交事件
document.getElementById('questionForm').addEventListener('submit', sub);



// 禁用右鍵和開發者工具
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});
