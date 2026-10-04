import Field from "./Field";

const AccountInfo = ({ form, editing, onEditProfileHandler }) => {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 shadow-xs sm:p-6">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <div className="relative z-10">
        <h3 className="text-sm font-semibold tracking-tight text-primary-text">
          Account Information
        </h3>

        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            label="Full Name"
            name="name"
            value={form.name}
            editing={editing}
            onChange={onEditProfileHandler}
          />
          <Field
            label="Username"
            name="username"
            value={form.username}
            editing={editing}
            onChange={onEditProfileHandler}
          />
          <Field
            label="Email"
            name="email"
            type="email"
            value={form.email}
            editing={editing}
            onChange={onEditProfileHandler}
          />
          <Field
            label="Location"
            name="location"
            value={form.location}
            editing={editing}
            onChange={onEditProfileHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;