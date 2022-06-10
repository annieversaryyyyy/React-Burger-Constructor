const AddIngredient= ({name, img, onDelete, count, onAdd}) =>  {
    let ingredImg = null;

    img.map(ingred => {
       if (ingred.name === name) ingredImg = ingred.image;
    });

    return (
            <div className="ingredient">
              <img src={ingredImg} alt={name} width="100px" onClick={() => onAdd(name)}/>
              <p> {name} </p>
                <p> X {count} </p>
                <button type="submit" onClick={onAdd}  className="addBtn">Add</button>
                {count === 0 ? null :
                    <button type="submit" onClick={onDelete} className="deleteBtn">Delete</button>
                }
            </div>
    );
};

export default AddIngredient;