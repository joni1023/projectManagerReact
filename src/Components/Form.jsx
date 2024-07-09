import { useState } from "react";

export function Form(props){
    const [formData, setFormData] = useState({
        name: (props.task? props.task.name:''),
        description: (props.task? props.task.description:''),
        projectManager: (props.task? props.task.projectManager:''),
        assignedTo: (props.task? props.task.assignedTo:''),
        status: (props.task? props.task.status:'enabled')
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'El nombre  es obligatorio';
        if (!formData.description) newErrors.description = 'la description es obligatorio';
        if (!formData.projectManager) newErrors.projectManager = 'La projectmanager es obligatoria';
        if (!formData.assignedTo) newErrors.assignedTo = 'El assignet  es obligatorio';
        if (!formData.status) newErrors.status = 'El status  es obligatorio';
        return newErrors;
      };
      
      
      const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
          setErrors(formErrors);
        } else {
          setErrors({});
          setFormData({
            name: '',
            description: '',
            projectManager: '',
            assignedTo: '',
            status: 'enabled',
          });
          if(props.task){
            props.updateTask(formData);
          }else{
            props.addTask(formData);
          }
        }
      };
      
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Project name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <label>
                Description:
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </label>
            {errors.description && <span className="error">{errors.description}</span>}
          </div>
          <div>
          <label>
          Project Manager:
          <select
            name="projectManager"
            value={formData.projectManager}
            onChange={handleChange}
          >
            <option value="">Select Person</option>
            <option value="Walt Corsini">Walt Corsini</option>
            <option value="Elon Musk">Elon Musk</option>
          </select>
        </label>
        {errors.projectManager && <span className="error">{errors.projectManager}</span>}
          </div>
          <div>
          <label>
          Opción:
          <select
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
          >
            <option value="">Select Person</option>
            <option value="Ignacio Truffa">Ignacio Truffa</option>
            <option value="Bill Gates">Bill Gates</option>
          </select>
        </label>
        {errors.assignedTo && <span className="error">{errors.assignedTo}</span>}
          </div>
          <div>
          <label>
          Status:
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </select>
        </label>
        {errors.status && <span className="error">{errors.status}</span>}
          </div>
          <button className="btn btn_form" type="submit">{!props.task?'Create project':'Save changes'}</button>
        </form>
      );
}