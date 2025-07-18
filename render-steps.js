/**
 * @argument {[{
 *    step: string;
 *    code?: string;
 *    codeDescription?: string;
 *    image?: string;
 *    imageCaption?: string;
 * }]} steps - An array of step objects,
*/
export const renderSteps = (steps) => {
  const ol = document.getElementById('list');

  steps.forEach((step, i, arr) => {
    const isFirst = i == 0;

    const li = `
      <li class="${isFirst ? "" : "mt-4"}">
        <h4>${step.step}</h4>

        <div class="relative">
          ${step.code ? `<pre class="code">${step.code}</pre>` : ''}

          ${step.codeDescription ? `<p class="code-description">${step.codeDescription}</p>` : ''
        }
        </div>
        
        ${step.image ? `
          <div>
            <img src="${step.image}" alt="${step.step}" class="step-image">
            <div class="image-caption">${step.imageCaption || ''}</div>
          </div>
          `: ''}
      </li>
    `;

    ol.innerHTML += li;
  });
}
