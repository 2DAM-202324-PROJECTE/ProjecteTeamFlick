
let currentOpenContentId = null;

function toggleContent(elementId) {
    const content = document.getElementById(elementId);

    if (currentOpenContentId && currentOpenContentId !== elementId) {
        const currentOpenContent = document.getElementById(currentOpenContentId);
        currentOpenContent.classList.add('hidden');
    }

    content.classList.toggle('hidden');
    currentOpenContentId = content.classList.contains('hidden') ? null : elementId;
}