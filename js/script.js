let currentUser = null;

// โหลดข้อมูลผู้ใช้จาก LocalStorage
function loadUser() {
    const user = localStorage.getItem('currentUser');
    if (user) {
        currentUser = JSON.parse(user);
    }
}

// สมัครสมาชิก
function registerUser() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const phone = document.getElementById('regPhone').value || '';
    const type = document.getElementById('regType').value;

    if (!name || !email) {
        alert("กรุณากรอกชื่อและอีเมล");
        return;
    }

    const user = {
        name: name,
        email: email,
        phone: phone,
        type: type,
        registeredAt: new Date().toISOString()
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    currentUser = user;
    
    alert("✅ สมัครสมาชิกสำเร็จ! ยินดีต้อนรับ " + name);
    window.location.href = "index.html";
}

// เข้าสู่ระบบ (จำลอง)
function showLogin() {
    const email = prompt("กรอกอีเมลเพื่อเข้าสู่ระบบ:");
    if (email) {
        const fakeUser = {
            name: "สมชาย ใจดี",
            email: email,
            type: "worker"
        };
        localStorage.setItem('currentUser', JSON.stringify(fakeUser));
        currentUser = fakeUser;
        alert("เข้าสู่ระบบสำเร็จ!");
        window.location.reload();
    }
}

// ออกจากระบบ
function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    alert("ออกจากระบบแล้ว");
    window.location.reload();
}

// โหลดเมื่อเปิดหน้า
document.addEventListener('DOMContentLoaded', loadUser);