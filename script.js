function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dobError = document.getElementById('dob-error');

    // Clear previous error messages
    dobError.innerText = '';

    if (!dobInput) {
        dobError.innerText = 'Please enter a valid date of birth.';
        return;
    }

    const birthDate = new Date(dobInput);
    const today = new Date();

    if (birthDate > today) {
        dobError.innerText = 'Date of birth cannot be in the future.';
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is ${age} years.`;
}
