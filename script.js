document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Stop standard browser page-reload behavior

    // Grab field values directly
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;

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

    // Simulate database network delay, then route to login homepage
    setTimeout(() => {
        // .replace() prevents the user from hitting "Back" and getting stuck on the register page
        window.location.replace('https://tharahuokaing.github.io/school_login/'); 
    }, 2000);
});

/**
 * Helper Function to cleanly render Alert States
 * @param {string} message - The text to display
 * @param {'error' | 'success'} type - The type of alert
 */
function showAlert(message, type) {
    const alertBox = document.getElementById('formAlert');
    
    alertBox.textContent = message;
    
    // Reset classes using modern syntax
    alertBox.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');

    // Toggle styling based on type
    const isError = type === 'error';
    alertBox.classList.add(
        isError ? 'bg-red-100' : 'bg-green-100',
        isError ? 'text-red-700' : 'text-green-700'
    );
}
