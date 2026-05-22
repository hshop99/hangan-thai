function showLogin() {
    alert("🛠 ระบบเข้าสู่ระบบยังอยู่ในระหว่างพัฒนา");
}

// ข้อมูลงานตัวอย่าง
const jobs = [
    {
        title: "พนักงานช่วยงานก่อสร้าง",
        type: "daily",
        wage: "450 บาท/วัน",
        location: "บางบ่อ, สมุทรปราการ",
        people: 3
    },
    {
        title: "พนักงานโรงงานผลิต",
        type: "fulltime",
        wage: "13,000 บาท/เดือน",
        location: "สมุทรปราการ",
        people: 5
    },
    {
        title: "แม่บ้านทำความสะอาด",
        type: "daily",
        wage: "400 บาท/วัน",
        location: "บางพลี, สมุทรปราการ",
        people: 2
    }
];

// แสดงงาน
function displayJobs(filteredJobs) {
    const jobList = document.getElementById('jobList');
    if (!jobList) return;
    
    jobList.innerHTML = '';
    
    filteredJobs.forEach(job => {
        const div = document.createElement('div');
        div.className = 'job-card';
        div.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>ค่าจ้าง:</strong> ${job.wage}</p>
            <p><strong>สถานที่:</strong> ${job.location}</p>
            <p><strong>ต้องการ:</strong> ${job.people} คน</p>
            <button onclick="applyJob('${job.title}')" 
                    style="background:#28a745; color:white; border:none; padding:10px 20px; border-radius:8px; margin-top:10px;">
                สมัครงาน
            </button>
        `;
        jobList.appendChild(div);
    });
}

function applyJob(title) {
    alert(`✅ คุณได้สมัครงาน "${title}" เรียบร้อยแล้ว!\n\n(ยังเป็นระบบจำลอง)`);
}

// เรียกใช้เมื่อโหลดหน้า
document.addEventListener('DOMContentLoaded', () => {
    displayJobs(jobs);
    
    // การค้นหา
    const searchInput = document.getElementById('searchInput');
    const typeFilter = document.getElementById('typeFilter');
    
    if (searchInput && typeFilter) {
        function filterJobs() {
            const keyword = searchInput.value.toLowerCase();
            const type = typeFilter.value;
            
            const filtered = jobs.filter(job => {
                const matchKeyword = job.title.toLowerCase().includes(keyword) || 
                                   job.location.toLowerCase().includes(keyword);
                const matchType = !type || job.type === type;
                return matchKeyword && matchType;
            });
            
            displayJobs(filtered);
        }
        
        searchInput.addEventListener('input', filterJobs);
        typeFilter.addEventListener('change', filterJobs);
    }
});