document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { name: "Grilled Salmon", description: "Deliciously cooked salmon with a side of vegetables.", price: "$15.99" },
        { name: "Chicken Alfredo", description: "Creamy alfredo pasta topped with tender chicken pieces.", price: "$12.99" },
        { name: "Classic Cheeseburger", description: "Grilled to perfection with cheese, lettuce, tomato, and our special sauce.", price: "$10.99" }
    ];

    const menuContainer = document.getElementById('menu-container');

    menuItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('menu-item');

        itemElement.innerHTML = `
            <div class="item-name">${item.name}</div>
            <div class="item-description">${item.description}</div>
            <div class="item-price">${item.price}</div>
        `;

        menuContainer.appendChild(itemElement);
    });
});
