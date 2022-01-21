const addBtn = document.querySelector("#add-btn");

function deleteBlock(e) {
  if (confirm("You will delete parent node and children nodes")) {
    const block = e.target.closest(".block");
    block.remove();
  }
}

function editBlock(e) {
  const block = e.target.closest(".block");
  block.querySelector("input").focus();
}

function save(e) {
  const block = e.target.closest(".block");
  const content = block.querySelector(".content");
  const input = content.querySelector("input");
  const saveBtn = content.querySelector(".save-btn");
  const deleteBtn = content.querySelector(".delete-btn");

  if (!input.value) {
    input.focus();
  } else {
    const addBtn = document.createElement("button");
    addBtn.classList = "add-btn";
    addBtn.innerText = "➕";
    addBtn.addEventListener("click", addBlock);

    const editBtn = document.createElement("button");
    editBtn.classList = "edit-btn";
    editBtn.innerText = "✐";
    editBtn.addEventListener("click", editBlock);

    const newDeleteBtn = document.createElement("button");
    newDeleteBtn.classList = "delete-btn red";
    newDeleteBtn.innerText = "❌";
    newDeleteBtn.addEventListener("click", deleteBlock);

    saveBtn.remove();
    deleteBtn.remove();
    content.append(addBtn, editBtn, newDeleteBtn);
  }
}

function addBlock(e) {
  const block = e.target.closest(".block");
  const subBlockContainer = block.querySelector(".sub-block");

  const blockDiv = document.createElement("div");
  blockDiv.classList = "block";

  const contentDiv = document.createElement("div");
  contentDiv.classList = "content";

  const blockInput = document.createElement("input");
  blockInput.placeholder = "Category name";

  const saveBtn = document.createElement("button");
  saveBtn.classList = "save-btn";
  saveBtn.innerText = "✔";
  saveBtn.addEventListener("click", save);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList = "delete-btn";
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteBlock);

  const subBlockDiv = document.createElement("div");
  subBlockDiv.classList = "sub-block";

  contentDiv.append(blockInput, saveBtn, deleteBtn);
  blockDiv.append(contentDiv, subBlockDiv);
  subBlockContainer.append(blockDiv);
  blockInput.focus();
}

addBtn.addEventListener("click", addBlock);

const chart = document.querySelector(".chart");

var mousePosition;
var offset = [0, 0];
var isDown = false;

chart.addEventListener("mousedown", function (e) {
  isDown = true;
  offset = [chart.offsetLeft - e.clientX, chart.offsetTop - e.clientY];
});

document.addEventListener("mouseup", function () {
  isDown = false;
});

document.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (isDown) {
    mousePosition = {
      x: e.clientX,
      y: e.clientY,
    };
    chart.style.left = mousePosition.x + offset[0] + "px";
    chart.style.top = mousePosition.y + offset[1] + "px";
  }
});
