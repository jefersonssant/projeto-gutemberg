
        const imgs = document.getElementById ("img.cssel");
        const img = document.querySelectorAll ("#img img.cssel")

        let idg = 0;

        function carrossel(){
            idg++;

            if (idg > img.length-1) {
                idg = 0}

            imgs.style.transform = 'translateX (${-idg * 500}px)'; 
            }

        setInterval (carrossel, 1800);