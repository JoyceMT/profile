export const handleNewSubscription = () => {
  console.log("se ejecutó el handle");
  const tarjetaBtn = document.querySelector(
    ".w-100.w-40-xl.pt6.pt0-xl.pl0.pl6-xl .styleguide__box.bg-base.t-body.c-on-base.br3.b--muted-4.ba .t-body .vtex-button__label.flex.items-center.justify-center.h-100.ph5 "
  );
  // check if the colonia selector doesn't have a value and if there is not another alert
  if (
    !document.querySelector(
      ".vtex-input__error.c-danger.t-small.mt3.lh-title.colonia-alert"
    )
  ) {
    if (tarjetaBtn) {
      if (tarjetaBtn.innerHTML.indexOf("Agregar nueva tarjeta") !== -1) {
        const label = document.querySelector(
          ".w-100.w-40-xl.pt6.pt0-xl.pl0.pl6-xl .styleguide__box.bg-base.t-body.c-on-base.br3.b--muted-4.ba .pa7.b--muted-4.bb .t-small.c-on-base.mb4"
        );
        if (label.innerHTML.indexOf("Método de pago") !== -1) {
          const alert = document.createElement("div");
          alert.textContent =
            "Es necesario generar un pedido previamente con tarjeta para poder realizar Pedidos Recurrentes";
          alert.classList.add(
            "vtex-input__error",
            "c-danger",
            "t-small",
            "mt3",
            "lh-title",
            "colonia-alert"
          );

          label.appendChild(alert);
        } else {
          document.querySelector(".colonia-alert").remove();
        }
      }
    }
  }
  return;
};
