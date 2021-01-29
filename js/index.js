window.addEventListener('load', () => {

    const toggles = document.querySelectorAll('.faq-toggle'),
        faqs = document.querySelectorAll('.faq-container .faq');

    const quests = [
        "Why shouldn't we trust atoms?",
        "What is: 1 + 1?",
        "What do you call someone with no body and no nose?",
        "What's the object-oriented way to become wealthy?",
        "How many tickles does it take to tickle an octopus?",
        "What a question about something interesting?",
        "What a question about something interesting?",
        "What a question about something interesting?",
        "What a question about something interesting?",
        "What a question about something interesting?",
        "What a question about something interesting?",
    ];
    const answers = [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, consequatur. Praesentium quae, ipsum itaque veritatis neque necessitatibus beatae deleniti dolorem modi obcaecati, voluptate quia quos consectetur voluptatem, sequi recusandae expedita possimus deserunt dolore aliquid iure voluptatum. Ex dolore, et corrupti voluptatem impedit temporibus labore culpa aut, fuga quis minima consequatur.`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, consequatur. Praesentium quae, ipsum itaque veritatis neque necessitatibus beatae deleniti dolorem modi obcaecati, voluptate quia quos consectetur voluptatem, sequi recusandae expedita possimus deserunt dolore aliquid iure voluptatum. Ex dolore, et corrupti voluptatem impedit temporibus labore culpa aut, fuga quis minima consequatur.`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, consequatur. Iure, nemo porro repellat reprehenderit iste eius praesentium repudiandae facere facilis. Nulla numquam quibusdam vel illum eaque ab distinctio animi doloremque! Ab distinctio numquam recusandae facere minus doloribus quis aperiam nobis, soluta rem atque fugit illo itaque culpa error fugiat magnam assumenda autem repudiandae quia! Modi, temporibus consequatur. Voluptates ullam dolores quidem similique officia delectus dicta deserunt perspiciatis odio quia sapiente, esse fuga architecto repellat! Facilis natus minus pariatur libero amet ex! Fugit at, iusto autem nulla officia ipsam quidem ex laudantium quibusdam modi aspernatur nihil iure vitae labore. Odio!`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, ipsum. Dicta hic doloremque praesentium pariatur! Nostrum commodi reprehenderit voluptates explicabo aperiam inventore aliquam totam voluptas, quas autem mollitia dolore rem laudantium officiis at consequatur voluptate tenetur fugiat velit dolorum ut. Nam laudantium autem veniam adipisci magni tenetur quis repellendus est quam aperiam hic atque quidem sequi dolorum molestias, perspiciatis nesciunt temporibus ab dicta fugit, earum voluptatibus, commodi assumenda. Odio, facere?`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt natus, nisi impedit, ea esse sapiente neque illum explicabo possimus facilis officiis rem voluptate placeat velit eius maxime rerum perferendis blanditiis vitae! Soluta id rem nisi est, repudiandae odit praesentium, voluptas ad omnis voluptatibus ratione harum esse quasi quaerat? Ullam reprehenderit architecto natus consequuntur soluta ipsa, facere, laudantium sapiente, dolor temporibus expedita sed iure quos repellendus suscipit quaerat! Sint sapiente hic iusto facilis tenetur aperiam, vero nesciunt ipsam numquam! Dicta ab vero ullam fuga sapiente ex dolore minima consectetur nihil quisquam vitae perspiciatis, maxime voluptas? Vitae, a! Earum dolore voluptate ad cupiditate, nulla quas quo dolorem laboriosam doloremque officiis cumque aliquam vel nam incidunt accusamus architecto, corrupti doloribus explicabo illum praesentium necessitatibus eligendi officia. Corporis distinctio corrupti voluptatibus tempora laudantium provident iure sint assumenda vitae.`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt natus, nisi impedit, ea esse sapiente neque illum explicabo possimus facilis officiis rem voluptate placeat velit eius maxime rerum perferendis blanditiis vitae! Soluta id rem nisi est, repudiandae odit praesentium, voluptas ad omnis voluptatibus ratione harum esse quasi quaerat? Ullam reprehenderit architecto natus consequuntur soluta ipsa, facere, laudantium sapiente, dolor temporibus expedita sed iure quos repellendus suscipit quaerat! Sint sapiente hic iusto facilis tenetur aperiam, vero nesciunt ipsam numquam! Dicta ab vero ullam fuga sapiente ex dolore minima consectetur nihil quisquam vitae perspiciatis, maxime voluptas? Vitae, a! Earum dolore voluptate ad cupiditate, nulla quas quo dolorem laboriosam doloremque officiis cumque aliquam vel nam incidunt accusamus architecto, corrupti doloribus explicabo illum praesentium necessitatibus eligendi officia. Corporis distinctio corrupti voluptatibus tempora laudantium provident iure sint assumenda vitae.`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt natus, nisi impedit, ea esse sapiente neque illum explicabo possimus facilis officiis rem voluptate placeat velit eius maxime rerum perferendis blanditiis vitae! Soluta id rem nisi est, repudiandae odit praesentium, voluptas ad omnis voluptatibus ratione harum esse quasi quaerat? Ullam reprehenderit architecto natus consequuntur soluta ipsa, facere, laudantium sapiente, dolor temporibus expedita sed iure quos repellendus suscipit quaerat! Sint sapiente hic iusto facilis tenetur aperiam, vero nesciunt ipsam numquam! Dicta ab vero ullam fuga sapiente ex dolore minima consectetur nihil quisquam vitae perspiciatis, maxime voluptas? Vitae, a! Earum dolore voluptate ad cupiditate, nulla quas quo dolorem laboriosam doloremque officiis cumque aliquam vel nam incidunt accusamus architecto, corrupti doloribus explicabo illum praesentium necessitatibus eligendi officia. Corporis distinctio corrupti voluptatibus tempora laudantium provident iure sint assumenda vitae.`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt natus, nisi impedit, ea esse sapiente neque illum explicabo possimus facilis officiis rem voluptate placeat velit eius maxime rerum perferendis blanditiis vitae! Soluta id rem nisi est, repudiandae odit praesentium, voluptas ad omnis voluptatibus ratione harum esse quasi quaerat? Ullam reprehenderit architecto natus consequuntur soluta ipsa, facere, laudantium sapiente, dolor temporibus expedita sed iure quos repellendus suscipit quaerat! Sint sapiente hic iusto facilis tenetur aperiam, vero nesciunt ipsam numquam! Dicta ab vero ullam fuga sapiente ex dolore minima consectetur nihil quisquam vitae perspiciatis, maxime voluptas? Vitae, a! Earum dolore voluptate ad cupiditate, nulla quas quo dolorem laboriosam doloremque officiis cumque aliquam vel nam incidunt accusamus architecto, corrupti doloribus explicabo illum praesentium necessitatibus eligendi officia. Corporis distinctio corrupti voluptatibus tempora laudantium provident iure sint assumenda vitae.`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt natus, nisi impedit, ea esse sapiente neque illum explicabo possimus facilis officiis rem voluptate placeat velit eius maxime rerum perferendis blanditiis vitae! Soluta id rem nisi est, repudiandae odit praesentium, voluptas ad omnis voluptatibus ratione harum esse quasi quaerat? Ullam reprehenderit architecto natus consequuntur soluta ipsa, facere, laudantium sapiente, dolor temporibus expedita sed iure quos repellendus suscipit quaerat! Sint sapiente hic iusto facilis tenetur aperiam, vero nesciunt ipsam numquam! Dicta ab vero ullam fuga sapiente ex dolore minima consectetur nihil quisquam vitae perspiciatis, maxime voluptas? Vitae, a! Earum dolore voluptate ad cupiditate, nulla quas quo dolorem laboriosam doloremque officiis cumque aliquam vel nam incidunt accusamus architecto, corrupti doloribus explicabo illum praesentium necessitatibus eligendi officia. Corporis distinctio corrupti voluptatibus tempora laudantium provident iure sint assumenda vitae.`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt natus, nisi impedit, ea esse sapiente neque illum explicabo possimus facilis officiis rem voluptate placeat velit eius maxime rerum perferendis blanditiis vitae! Soluta id rem nisi est, repudiandae odit praesentium, voluptas ad omnis voluptatibus ratione harum esse quasi quaerat? Ullam reprehenderit architecto natus consequuntur soluta ipsa, facere, laudantium sapiente, dolor temporibus expedita sed iure quos repellendus suscipit quaerat! Sint sapiente hic iusto facilis tenetur aperiam, vero nesciunt ipsam numquam! Dicta ab vero ullam fuga sapiente ex dolore minima consectetur nihil quisquam vitae perspiciatis, maxime voluptas? Vitae, a! Earum dolore voluptate ad cupiditate, nulla quas quo dolorem laboriosam doloremque officiis cumque aliquam vel nam incidunt accusamus architecto, corrupti doloribus explicabo illum praesentium necessitatibus eligendi officia. Corporis distinctio corrupti voluptatibus tempora laudantium provident iure sint assumenda vitae.`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt natus, nisi impedit, ea esse sapiente neque illum explicabo possimus facilis officiis rem voluptate placeat velit eius maxime rerum perferendis blanditiis vitae! Soluta id rem nisi est, repudiandae odit praesentium, voluptas ad omnis voluptatibus ratione harum esse quasi quaerat? Ullam reprehenderit architecto natus consequuntur soluta ipsa, facere, laudantium sapiente, dolor temporibus expedita sed iure quos repellendus suscipit quaerat! Sint sapiente hic iusto facilis tenetur aperiam, vero nesciunt ipsam numquam! Dicta ab vero ullam fuga sapiente ex dolore minima consectetur nihil quisquam vitae perspiciatis, maxime voluptas? Vitae, a! Earum dolore voluptate ad cupiditate, nulla quas quo dolorem laboriosam doloremque officiis cumque aliquam vel nam incidunt accusamus architecto, corrupti doloribus explicabo illum praesentium necessitatibus eligendi officia. Corporis distinctio corrupti voluptatibus tempora laudantium provident iure sint assumenda vitae.`,

    ];

    faqs.forEach((faq, idx) => {
        faq.insertAdjacentHTML('beforeend', `
        <h3 class="faq-title">
            ${quests[idx]}
        </h3>
        <p class="faq-text">
            ${answers[idx]}
        </p>
        `);
    });

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.parentNode.classList.toggle('active');
            //parentNode - находит родительский элемент кнопки и переключает 
            //у нее класс toggle
        });
    });

    window.addEventListener('scroll', checkFaqs);

    checkFaqs();

    function checkFaqs() {
        const triggerBottom = window.innerHeight / 1.2;
        faqs.forEach(faq => {
            const faqTop = faq.getBoundingClientRect().top;

            if (faqTop < triggerBottom) {
                faq.classList.add('show');
            } else {
                faq.classList.remove('show');
            }

        });
    };




});

