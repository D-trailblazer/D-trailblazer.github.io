Hi, I'm Sydney 👋🏻

I'm the designer who asks, "What problem does this actually solve?" before jumping into a design. With a background spanning healthcare, education, financial technology, and social impact, I design holistic experiences that satisfy real user needs and drive meaningful outcomes.

Sydney Rasmussen

make margins between sections bigger
add a work title 
add social media links and icons
improve the bio
add interactivity to nav links

form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 800px;
      margin: auto;

      label {
         margin-bottom: 0.4rem;
         font-size: 1rem;
         text-align: left;
         color: var(--color-light);
      }

      label#msg {
         margin-bottom: 20px;
         color: red !important;
         text-align: left !important;
      }

      /* Group row for name + email side by side */
      .form-row {
         display: flex;
         gap: 1rem;

         .form-group {
            flex: 1;
            display: flex;
            flex-direction: column;
         }

         .form-group.full {
            flex: 0 0 100%;
            flex: none;
         }
      }

      /* Inputs + textarea */
      input,
      textarea {
         padding: 0.9rem;
         border-radius: var(--radius);
         border: none;
         outline: none;
         font-size: 1rem;
         color: var(--color-light);
         transition: all 0.2s ease;

         &:focus {
            border: 1px solid var(--color-light);
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
         }
      }

      textarea {
         resize: vertical;
         min-height: 80px;
         width: 100%;
      }

      /* Submit button */
      input[type="submit"] {
         width: 100%;
         background: linear-gradient(135deg, #444, #111);
         background: #000;
         font-size: 1.1rem;
         font-weight: bold;
         color: var(--color-light);
         cursor: pointer;
         transition: var(--transition);

         &:hover {
            background: linear-gradient(135deg, #666, #222);
         }
      }
   }

   <!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Chidubem Eneh</title>
   <link rel="stylesheet" href="style.css" />
   <link rel="stylesheet" href="./resources/fontawesome-free-6.6.0-web/css/all.css" />
   <link rel="stylesheet" href="./resources/fontawesome-free-6.6.0-web/css/brands.css" />
</head>

<body>
   <div class="container">
      <header id="intro">
         <h1>Chidubem Eneh</h1>
         <p>UX Designer • Innovator • Problem Solver</p>
      </header>

      <main>
         <!-- SECTION 1 -->
         <section id="problem">
            <h2>Problem Definition</h2>
            <p>
               Rencia Foods aims to streamline restaurant management and reduce customer disappointment.
               Customers frequently arrive to find no free tables or unavailable dishes, leading to long wait times.
            </p>
         </section>

         <!-- SECTION 2 -->
         <section id="solution">
            <h2>Solution Approach</h2>
            <p>
               The concept introduces an app that manages seating capacity and real-time dish availability,
               allowing customers to check table status and place pre-orders before arrival.
            </p>
         </section>

         <!-- SECTION 3 -->
         <section id="impact">
            <h2>Impact & Insights</h2>
            <p>
               With optimized space management and reduced waiting times, both customer satisfaction
               and restaurant efficiency are significantly improved.
            </p>
         </section>

         <!-- SECTION 4 -->
         <section id="next">
            <h2>Next Steps</h2>
            <p>
               Prototype development and user testing to validate usability, accessibility, and real-world
               performance under varying customer loads.
            </p>
         </section>

         <div class="coming-soon">
            Prototype Coming Soon
         </div>
      </main>

      <footer>
         <div>
            <p>Built by Me &copy;</p>
            <a href="mailto:enehchidubem61@gmail.com">enehchidubem61@gmail.com</a>
         </div>
      </footer>
   </div>

   <!-- Scroll Guide -->
   <div class="scroll-guide">
      <div class="scroll-item" data-target="#intro" data-label="Intro">1</div>
      <div class="scroll-item" data-target="#problem" data-label="Problem Definition">2</div>
      <div class="scroll-item" data-target="#solution" data-label="Solution Approach">3</div>
      <div class="scroll-item" data-target="#impact" data-label="Impact & Insights">4</div>
      <div class="scroll-item" data-target="#next" data-label="Next Steps">5</div>
   </div>

   <script src="script.js"></script>
</body>
</html>
