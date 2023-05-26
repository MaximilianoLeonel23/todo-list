interface Props {
  getTask: (e: any) => void;
}

const Form = ({ getTask }: Props): JSX.Element => {
  return (
    <section className="col-12 col-sm-10 col-md-6 py-4 mb-3">
      <form id="form" onSubmit={getTask}>
        <div className="container">
          <div className="row g-3 align-items-center mb-3">
            <div className="col-auto">
              <label htmlFor="task" className="col-form-label">
                Tarea
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                id="task"
                name="task"
                className="form-control"
                aria-labelledby="taskHelpInline"
                required
              />
            </div>
          </div>
          <div className="row g-3 align-items-center mb-3">
            <div className="col-auto">
              <label htmlFor="description" className="col-form-label">
                Descripción
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                id="description"
                name="description"
                className="form-control"
                aria-labelledby="descriptionHelpInline"
              />
            </div>
          </div>
          <div className="row g-3 align-items-center mb-3">
            <div className="col-auto">
              <label htmlFor="date" className="col-form-label">
                Fecha límite
              </label>
            </div>
            <div className="col-auto">
              <input
                type="date"
                id="date"
                name="date"
                className="form-control"
                aria-labelledby="deadlineDateHelpInline"
                placeholder="dd/mm/aaaa"
                required
              />
            </div>
          </div>
          <div className="row g-3 align-items-center mb-3">
            <div className="col-auto">
              <label htmlFor="hour" className="col-form-label">
                Hora
              </label>
            </div>
            <div className="col-auto">
              <input
                type="time"
                id="hour"
                name="hour"
                className="form-control"
                aria-labelledby="deadlineHourHelpInline"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row g-3 align-items-center mb-3">
            <button type="submit" className="btn btn-primary">
              Agregar tarea
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
