// Sample data for demonstration
const userData = {
    userName: "John Doe",
    profilePic: "user-profile-pic.jpg",
    totalTickets: 0
};

// Update user profile information
document.querySelector('.profile-pic img').src = userData.profilePic;
document.querySelector('.user-details h2').textContent = userData.userName;
document.querySelector('#ticketCount').textContent = userData.totalTickets;

// Membership button click event
document.querySelector('#membershipButton').addEventListener('click', function() {
    alert('Membership option will be available shortly! sorry for the inconvenience.');
});
