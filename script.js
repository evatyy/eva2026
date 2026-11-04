document.addEventListener('DOMContentLoaded', function() {

    const music = document.getElementById('totoro-music');
    if (music) {
        const tryPlayMusic = function() {
            music.play().catch(function() {

            });
        };
        tryPlayMusic();
        document.addEventListener('pointerdown', tryPlayMusic, { once: true });
        document.addEventListener('keydown', tryPlayMusic, { once: true });
    }
    

    const submitBtn = document.getElementById('submit-btn');
    const resultBox = document.getElementById('result');
    const scoreGuide = document.getElementById('score-guide');
    const scoreDisplay = document.getElementById('score-display');
    const characterTitle = document.getElementById('character-title');
    const feedbackText = document.getElementById('feedback-text');

    const nameBtn = document.getElementById('name-btn');
    const userCodenameInput = document.getElementById('user-codename');
    const nameOutput = document.getElementById('name-output');

     if (nameBtn) {
        nameBtn.addEventListener('click', function() {
            const inputValue = userCodenameInput.value.trim();

            if (inputValue === "") {
                nameOutput.innerHTML = "❌ 宇宙核心提示：欄位不能留白喔！請輸入暱稱。";
                nameOutput.style.color = "#e53e3e";
            } else if (inputValue.length > 8) {
                nameOutput.innerHTML = `⚠️ 暱稱太長了（緩衝區溢位）！【${inputValue}】已被系統自動壓縮為精簡格式。`;
                nameOutput.style.color = "#b7791f";
            } else {
                nameOutput.innerHTML = `🎉 綁定成功！【${inputValue}】正式轉生為本宇宙認證的首席網頁開拓者！`;
                nameOutput.style.color = "#2b6cb0";
            }
        });
    }

    submitBtn.addEventListener('click', function() {
        const form = document.getElementById('quiz-form');
        const formData = new FormData(form);

        let counts = { A: 0, B: 0, C: 0 };
        let answeredCount = 0;

        for (let i = 1; i <= 3; i++) {
            const answer = formData.get(`q${i}`);
            if (answer) {
                counts[answer]++;
                answeredCount++;
            }
        }

        if (answeredCount < 3) {
            alert('請填完所有問題。');
            return;
        }

        if (music) {
            music.pause();
            music.src = '愛スクリムshorts.mp3';
            music.load();
            music.play().catch(function() {

            });
        }

        let totalScore = 40 + (counts.B * 20) + (counts.A * 15) + (counts.C * 10);
        if (totalScore > 100) totalScore = 100;

        resultBox.classList.remove('hidden');
        scoreGuide.classList.remove('hidden');

        scoreDisplay.innerText = `💯 你的互動得分：${totalScore} 分`;

        let finalResult = 'A'; 
        if (counts.B > counts.A && counts.B >= counts.C) {
            finalResult = 'B';
        } else if (counts.C > counts.A && counts.C > counts.B) {
            finalResult = 'C';
        }

        if (finalResult === 'A') {
            characterTitle.innerText = '🎨 華麗視覺大師 —— CSS';
            feedbackText.innerText = '你天生擁有極高的審美細胞！不論做什麼事，你都希望它是美觀、精緻且引人注目的。在團隊中，你負責包辦所有的美感與門面，沒有你，世界就會變得單調乏味！';
            resultBox.style.background = '#ffe9ec'; 
            resultBox.style.border = '2px solid #ffb6c1';
            scoreDisplay.style.color = '#e53e3e';
            characterTitle.style.color = '#e53e3e';
        } else if (finalResult === 'B') {
            characterTitle.innerText = '⚡ 核心高能專家 —— JavaScript';
            feedbackText.innerText = '你是一個充滿邏輯與動態活力的人！比起靜態的畫面，你更喜歡「動起來」和解決問題。你反應靈敏、擅長處理突發事件，是讓整個網頁（生活）運轉起來的關鍵推手！';
            resultBox.style.background = '#fffde7'; 
            resultBox.style.border = '2px solid #fff59d';
            scoreDisplay.style.color = '#b7791f';
            characterTitle.style.color = '#b7791f';
        } else {
            characterTitle.innerText = '🧱 穩重鋼鐵骨架 —— HTML';
            feedbackText.innerText = '你是最值得信賴的堅實後盾！你做事有條不紊、講求原則與結構。比起花俏的外表，你更在乎本質與地基是否穩固。有了你在，團隊才能安心地在上面發展各種可能！';
            resultBox.style.background = '#ebf8ff'; 
            resultBox.style.border = '2px solid #bee3f8';
            scoreDisplay.style.color = '#2b6cb0';
            characterTitle.style.color = '#2b6cb0';
        }

        resultBox.scrollIntoView({ behavior: 'smooth' });
    });

    if (nameBtn) {
        nameBtn.addEventListener('click', function() {
            const inputValue = userCodenameInput.value.trim();

            if (inputValue === "") {
                nameOutput.innerHTML = "❌ 輸入失敗：欄位不可留白，請重新輸入。";
                nameOutput.style.color = "#e53e3e";
            } else if (inputValue.length > 6) {
                nameOutput.innerHTML = `⚠️ 字數過長：【${inputValue}】已自動切換為精簡模式登錄。`;
                nameOutput.style.color = "#b7791f";
            } else {
                nameOutput.innerHTML = `✨ 變更成功：【${inputValue}】已成功登錄系統。`;
                nameOutput.style.color = "#2b6cb0";
            }
        });
    }
});
