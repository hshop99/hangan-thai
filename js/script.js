let currentUser = null;

function loadUser() {
    const user = localStorage.getItem('currentUser');
    if (user) {
        currentUser = JSON.parse(user);
    }
    updateAuthUI();
}

function updateAuthUI() {
    const authSection = document.getElementById('authSection');
    if (!authSection) return;

    if (currentUser) {
        authSection.innerHTML = `
            <span style="margin-right:15px;">สวัสดี, ${currentUser.name}</span>
            <button onclick="logout()" style="background:#dc3545; color:white; border:none; padding:8px 16px; border-radius:8px; cursor:pointer;">
                ออกจากระบบ
            </button>
        `;
    } else {
        authSection.innerHTML = `
            <button onclick="showLogin()" style="margin-right:10px;">เข้าสู่ระบบ</button>
            <button onclick="window.location.href='register.html'" style="background:#28a745; color:white; border:none; padding:8px 16px; border-radius:8px; cursor:pointer;">
                สมัครฟรี
            </button>
        `;
    }
}

function showLogin() {
    const email = prompt("กรอกอีเมลเพื่อเข้าสู่ระบบ:");
    if (email) {
        const fakeUser = { name: "สมชาย ใจดี", email: email, type: "worker" };
        localStorage.setItem('currentUser', JSON.stringify(fakeUser));
        currentUser = fakeUser;
        alert("เข้าสู่ระบบสำเร็จ!");
        window.location.reload();
    }
}

function logout() {
    if (confirm("ต้องการออกจากระบบ?")) {
        localStorage.removeItem('currentUser');
        currentUser = null;
        alert("ออกจากระบบแล้ว");
        window.location.reload();
    }
}

function registerUser() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    
    if (!name || !email) {
        alert("กรุณากรอกชื่อและอีเมล");
        return;
    }

    const user = { name, email, type: "worker" };
    localStorage.setItem('currentUser', JSON.stringify(user));
    alert("สมัครสมาชิกสำเร็จ!");
    window.location.href = "index.html";
}

// โหลดเมื่อเปิดทุกหน้า
document.addEventListener('DOMContentLoaded', loadUser);