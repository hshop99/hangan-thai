function showLogin() {
    alert("🛠 ระบบเข้าสู่ระบบยังอยู่ในระหว่างพัฒนา");
}

function goToJobs() {
    window.location.href = "jobs.html";
}

// ข้อมูลงานตัวอย่าง
const jobs = [
    { title: "ช่วยงานก่อสร้าง", type: "daily", wage: "450 บาท/วัน", location: "บางบ่อ, สมุทรปราการ", people: 4 },
    { title: "พนักงานโรงงาน", type: "fulltime", wage: "13,000 บาท/เดือน", location: "สมุทรปราการ", people: 6 },
    { title: "แม่บ้านทำความสะอาด", type: "daily", wage: "400 บาท/วัน", location: "บางพลี", people: 2 },
    { title: "พนักงานขับรถส่งของ", type: "daily", wage: "500 บาท/วัน", location: "บางบ่อ", people: 1 }
];

function displayJobs(filteredJobs) {
    const container = document.getElementById('jobList');
    if (!container) return;
    
    container.innerHTML = '';
    
    filteredJobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>ค่าจ้าง:</strong> ${job.wage}</p>
            <p><strong>สถานที่:</strong> ${job.location}</p>
            <p><strong>ต้องการ:</strong> ${job.people} คน</p>
            <button onclick="applyForJob('${job.title}')" class="apply-btn">สมัครงาน</button>
        `;
        container.appendChild(card);
    });
}

function applyForJob(title) {
    alert(`✅ สมัครงาน "${title}" เรียบร้อยแล้ว!\n\n(ระบบจำลอง - ต่อไปจะมีระบบจริง)`);
}

// ทำงานเมื่อโหลดหน้า jobs.html
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('jobList')) {
        displayJobs(jobs);

        const searchInput = document.getElementById('searchInput');
        const typeFilter = document.getElementById('typeFilter');

        function filter() {
            const keyword = searchInput.value.toLowerCase();
            const type = typeFilter.value;
            
            const filtered = jobs.filter(job => {
                const matchText = job.title.toLowerCase().includes(keyword) || job.location.toLowerCase().includes(keyword);
                const matchType = !type || job.type === type;
                return matchText && matchType;
            });
            displayJobs(filtered);
        }

        searchInput.addEventListener('input', filter);
        typeFilter.addEventListener('change', filter);
    }
});