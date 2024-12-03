function toggleFold(event) 
{
    event.preventDefault();

    const anchor = event.target.closest('a');
    const heading = anchor.querySelector('h1');
    const foldableContent = anchor.nextElementSibling;

    if (foldableContent && foldableContent.classList.contains('foldable')) 
    {
        const isOpen = foldableContent.classList.toggle('open');

        if (!isOpen) 
        {
            heading.style.color = 'red';
            if (!anchor.querySelector('.folded-indicator'))
            {
                const indicator = document.createElement('small');
                indicator.textContent = ' (Folded)';
                indicator.className = 'folded-indicator';
                heading.appendChild(indicator);
            }
        } 
        else 
        {
            heading.style.color = '';
            const indicator = anchor.querySelector('.folded-indicator');
            if (indicator) 
            {
                heading.removeChild(indicator);
            }
        }
    }
}

function initializeFoldableContent() 
{
    const anchors = document.querySelectorAll('a');
    anchors.forEach(anchor => 
    {   
        const heading = anchor.querySelector('h1');
        const foldableContent = anchor.nextElementSibling;

        if (foldableContent && foldableContent.classList.contains('foldable')) 
        {
            foldableContent.classList.remove('open');
            heading.style.color = 'red';
            if (!anchor.querySelector('.folded-indicator')) 
            {
                const indicator = document.createElement('small');
                indicator.textContent = ' (Folded)';
                indicator.className = 'folded-indicator';
                heading.appendChild(indicator);
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeFoldableContent);
