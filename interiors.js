document.addEventListener('DOMContentLoaded', () => {
    
    // --- YOUR INTERIOR DATA ---
    const interiorData = {
        trailer: [
            { name: "BEACH", link: "https://r2.fivemanage.com/image/Dh7wCYUuil8q.png", note: "$10K Fee" },
            { name: "JAMES", link: "https://r2.fivemanage.com/image/ZOb4shuIe7GZ.png", note: "$10K Fee" },
            { name: "SANDY", link: "https://r2.fivemanage.com/image/lVpHgPm0Bs96.png", note: "$7K Fee" },
            { name: "SOPOR", link: "https://r2.fivemanage.com/image/Eact22zPXMS6.png", note: "$10K Fee (Trailer MUST be grounded & a double wide)" }
        ],
        apartment: [
            { name: "ALTA", link: "https://r2.fivemanage.com/image/Yyixf8fYXkPV.png", note: "$10K Fee" },
            { name: "BEACH", link: "https://r2.fivemanage.com/image/Dh7wCYUuil8q.png", note: "$10K Fee" },
            { name: "CYPRESS", link: "https://r2.fivemanage.com/image/U2owXIRlu7l4.png", note: "$10K Fee" },
            { name: "FRESCO", link: "https://r2.fivemanage.com/image/xv3eb3GLyDwM.png", note: "$10K Fee" },
            { name: "GULF", link: "https://r2.fivemanage.com/image/XLVcczphFWuu.png", note: "$10K Fee" },
            { name: "JAMES", link: "https://r2.fivemanage.com/image/ZOb4shuIe7GZ.png", note: "$10K Fee" },
            { name: "MONET", link: "https://r2.fivemanage.com/image/bAUCikzX7QzF.png", note: "$10K Fee" },
            { name: "RETRO", link: "https://r2.fivemanage.com/image/3zmhO8ibrjny.png", note: "$10K Fee" }
        ],
        house: [
            { name: "AQUATIC", link: "https://r2.fivemanage.com/image/AZovjdudUUsj.png", note: "$13K Fee" },
            { name: "AVENGER", link: "https://r2.fivemanage.com/image/nvYqgUePs2s6.png", note: "$13K Fee" },
            { name: "BUNGALOW", link: "https://r2.fivemanage.com/image/3mL4NrY2ry0Q.png", note: "$13K Fee" },
            { name: "CLINTON", link: "https://r2.fivemanage.com/image/sAXTIFK6hZpw.png", note: "$5K Fee" },
            { name: "JAMES", link: "https://r2.fivemanage.com/image/ZOb4shuIe7GZ.png", note: "$10K Fee" },
            { name: "RETRO", link: "https://r2.fivemanage.com/image/3zmhO8ibrjny.png", note: "$10K Fee" },
            { name: "SOPOR", link: "https://r2.fivemanage.com/image/Eact22zPXMS6.png", note: "$10K Fee" },
            { name: "SUBTERRA", link: "https://r2.fivemanage.com/image/8In3guaF8yAV.png", note: "$13K Fee" },
            { name: "TERRA-COTTA", link: "https://r2.fivemanage.com/image/VBsdm1EYucR3.png", note: "$13K Fee" }
        ],
        "house-plus": [
            { name: "SAVOY", link: "https://r2.fivemanage.com/image/vt0vrFWGt48G.png", note: "$20K Fee" },
            { name: "VILLA", link: "https://r2.fivemanage.com/image/VGxsIVVtZU92.png", note: "$20K Fee" }
        ],
        mansion: [
            { name: "ECLIPSE", link: "https://r2.fivemanage.com/image/qgHf4UchMEdS.png", note: "$20K Fee" },
            { name: "RANCHER", link: "https://r2.fivemanage.com/image/FmXB0lraeo2h.png", note: "$20K Fee" },
            { name: "SAVOY", link: "https://r2.fivemanage.com/image/vt0vrFWGt48G.png", note: "$20K Fee" },
            { name: "TINSEL", link: "https://r2.fivemanage.com/image/XbKJ96HhhKXc.png", note: "$20K Fee" },
            { name: "VILLA", link: "https://r2.fivemanage.com/image/VGxsIVVtZU92.png", note: "$20K Fee" },
        ],
        premiumMansions: [
            {name: "Hawthorne", note: "$500K Fee", link: "https://r2.fivemanage.com/KzEWs4Qe9U9yOYTmCUG7d/6.png"},
            {name: "Inglewood", note: "$750K Fee", link: "https://r2.fivemanage.com/KzEWs4Qe9U9yOYTmCUG7d/Mansions.png"},
            {name: "Jasmine", note: "$750 Fee", link: "https://r2.fivemanage.com/KzEWs4Qe9U9yOYTmCUG7d/8.png"},
        ],
        warehouse: [
            {name: "Warehouses", link: "https://r2.fivemanage.com/image/PnTRStaSNRTE.png"},
        ]
    };

    const flyerData = [
        { title: "Master Trailer Interiors", link: "https://r2.fivemanage.com/image/EVYHbdTblF21.png", category: "trailer" },
        { title: "Master Apartment Interiors", link: "https://r2.fivemanage.com/image/dGX4XpTEE5l9.png", category: "apartment" },
        { title: "Master House Interiors", link: "https://r2.fivemanage.com/image/HRMqPtywCW4D.png", category: "house", },
        { title: "Master Mansion Interiors", link: "https://r2.fivemanage.com/image/U0r9clNOQkC7.png", category: "mansion", },
        { title: "Master Premium Mansions Interiors", link: "https://r2.fivemanage.com/KzEWs4Qe9U9yOYTmCUG7d/MansionsMaster.png", category: "Mansions", },
        { title: "Warehouses", link: "https://r2.fivemanage.com/image/PnTRStaSNRTE.png", category: "warehouse"},
        { title: "Dynasty 8 Realtor", link: "https://i.gyazo.com/adeeb65f716270b431076b7be024320d.png "},
    ];

    const interiorsContainer = document.getElementById('interiors-list-container');
    const flyersContainer = document.getElementById('flyers-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const contentBlock = document.querySelector('.content-block');

    function renderInteriors() {
        interiorsContainer.innerHTML = '';
        for (const categoryId in interiorData) {
            const categoryData = interiorData[categoryId];
            
            const categoryDiv = document.createElement('div');
            // This class is used by the filter function
            categoryDiv.className = 'interior-category'; 
            categoryDiv.dataset.category = categoryId;

            const categoryTitle = {
                trailer: "Trailer Interiors", apartment: "Apartment Interiors",
                house: "House Interiors", "house-plus": "House Interiors (600k+)",
                mansion: "Mansion Interiors", premiumMansions: "Premium Mansion Interiors",
                warehouse: "Warehouse Interiors"
            }[categoryId];

            let interiorsHTML = `<h2>${categoryTitle}</h2><div class="interior-grid">`;
            categoryData.forEach(interior => {
                const noteHTML = interior.note ? `<small class="interior-note">${interior.note}</small>` : '';
                // *** FIX: Reverted to the simpler, working HTML structure for each item ***
                interiorsHTML += `
                    <div class="interior-item">
                        <div class="interior-preview">
                            <img src="${interior.link}" alt="${interior.name}" class="preview-image" loading="lazy" title="Click to enlarge">
                        </div>
                        <div class="interior-details">
                            <span class="interior-name">${interior.name}</span>
                            ${noteHTML}
                        </div>                        
                        <div class="copy-link" title="Click to copy link">
                            <input type="text" value="${interior.link}" readonly>
                            <span>Copy Link</span>
                        </div>
                    </div>
                `;
            });
            interiorsHTML += `</div>`;
            categoryDiv.innerHTML = interiorsHTML;
            interiorsContainer.appendChild(categoryDiv);
        }
    }

    function renderFlyers() {
        if (!flyersContainer) return;
        flyersContainer.innerHTML = '';
        flyerData.forEach(flyer => {
            const flyerElement = document.createElement('div');
            flyerElement.className = 'flyer-item';
            // Add data-category to the flyer item itself for filtering
            flyerElement.dataset.category = flyer.category;
            flyerElement.innerHTML = `
                <div class="flyer-preview">
                    <img src="${flyer.link}" alt="${flyer.title}" class="flyer-image" loading="lazy" title="Click to enlarge">
                </div>
                <h3>${flyer.title}</h3>
                <div class="copy-link" title="Click to copy link">
                    <input type="text" value="${flyer.link}" readonly>
                    <span>Copy Link</span>
                </div>
            `;
            flyersContainer.appendChild(flyerElement);
        });
    }

    function filterContent(filter) {
        // Filter the interior categories
        document.querySelectorAll('.interior-category').forEach(cat => {
            cat.style.display = (filter === 'all' || cat.dataset.category === filter) ? 'block' : 'none';
        });

        // Filter the individual flyers
        document.querySelectorAll('.flyer-item').forEach(flyer => {
            flyer.style.display = (filter === 'all' || flyer.dataset.category === filter) ? 'flex' : 'none';
        });

        // Show/hide the main "Flyers" H1 title and HR line
        const flyerSection = document.querySelector('.filterable-section[data-category="flyers"]');
        if (flyerSection) {
            // Check if ANY flyers are visible after filtering
            const anyFlyersVisible = document.querySelector('.flyer-item[style*="display: flex"]');
            // Hide the entire section if no flyers are visible, show it if at least one is
            flyerSection.style.display = anyFlyersVisible ? 'block' : 'none';
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterContent(button.dataset.filter);
        });
    });

    contentBlock.addEventListener('click', e => {
        const copyDiv = e.target.closest('.copy-link');
        if (copyDiv) {
            const input = copyDiv.querySelector('input');
            const span = copyDiv.querySelector('span');
            input.select();
            document.execCommand('copy');
            span.textContent = 'Copied!';
            setTimeout(() => { span.textContent = 'Copy Link'; }, 2000);
        }

        if (e.target.classList.contains('preview-image') || e.target.classList.contains('flyer-image')) {
            lightboxImage.src = e.target.src;
            lightboxOverlay.style.display = 'flex';
        }
    });
    
    lightboxClose.addEventListener('click', () => { lightboxOverlay.style.display = 'none'; });
    lightboxOverlay.addEventListener('click', e => { if (e.target === lightboxOverlay) { lightboxOverlay.style.display = 'none'; } });

    renderInteriors();
    renderFlyers();
    // Run the filter once on load to respect the default 'All' button
    filterContent('all');
});