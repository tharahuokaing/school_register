document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop standard browser page-reload behavior

    // Grab field elements and values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const alertBox = document.getElementById('formAlert');

    // Basic Form Validation Checks
    if (!fullName || !email || !phone || !password) {
        showAlert('សូមបំពេញព័ត៌មានឱ្យបានគ្រប់គ្រាន់!', 'error');
        return;
    }

    if (password.length < 6) {
        showAlert('លេខកូដសម្ងាត់ត្រូវតែមានយ៉ាងតិច ៦ ខ្ទង់!', 'error');
        return;
    }

    // Success Simulation Block
    showAlert('ការចុះឈ្មោះបានជោគជ័យ! ប្រព័ន្ធកំពុងបញ្ជូនលោកអ្នកទៅកាន់ទំព័រពិត...', 'success');

    // Simulate database network delay, then route to login or core homepage
    setTimeout(() => {
        window.location.href = 'https://tharahuokaing.github.io/school_login/'; 
    }, 2000);
});

// Helper Function to cleanly render Alert States
function showAlert(message, type) {
    const alertBox = document.getElementById('formAlert');
    alertBox.textContent = message;
    alertBox.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');

    if (type === 'error') {
        alertBox.classList.add('bg-red-100', 'text-red-700');
    } else if (type === 'success') {
        alertBox.classList.add('bg-green-100', 'text-green-700');
    }
}
