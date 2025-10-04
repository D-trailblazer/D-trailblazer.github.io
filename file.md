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