module.exports = (sequelize, Sequelize) => {
  
    const Payments = sequelize.define('Payments', {
      Customernumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Transactionnumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      PaymentDate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      CreatedBy: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ModifiedBy: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });

    return Payments;
  };
