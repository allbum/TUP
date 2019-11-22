using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace PostoDeGasolina
{
    public partial class frmPrincipal : Form
    {
        private Decimal ValorLitro;
        private const int CAPACIDADE_MAXIMA = 500;
        private int capacidadeAtual;
        List<Cadastro> cadastros;
        public frmPrincipal()
        {
            InitializeComponent();
            capacidadeAtual = CAPACIDADE_MAXIMA;
            ValorLitro = 3.5m;
            numUdLitros.Maximum = CAPACIDADE_MAXIMA;
            cadastros = new List<Cadastro>();
        }

        private void FrmPrincipal_Load(object sender, EventArgs e)
        {
            lbl_litros.Text = ValorLitro.ToString();
            
        }

        private void RelatóriosToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Form2 frmRelatorio = new Form2();
            frmRelatorio.Show();
            frmRelatorio.relatorios = cadastros;

        }

        private void NumUdLitros_ValueChanged(object sender, EventArgs e)
        {
            //if(numUdLitros.Value == 0)
            txtTotalPagamento.Text = (numUdLitros.Value * ValorLitro).ToString();
        }

        private void BtnFinalizar_Click(object sender, EventArgs e)
        {
            var checkedButton = this.groupBox3.Controls.OfType<RadioButton>()
                                      .FirstOrDefault(r => r.Checked);

            capacidadeAtual = capacidadeAtual - (int) numUdLitros.Value;
            lbl_litros.Text = Convert.ToString(capacidadeAtual);
            cadastros.Add(new Cadastro() { Nome = txtNome.Text, Telefone = maskedTextBox1.Text, TipoDePagamento = checkedButton.Text});
            dataGridView1.DataSource = cadastros;
            dataGridView1.Refresh();
            LimparControle();
        }

        private void LimparControle()
        {
            maskedTextBox1.Text = txtNome.Text = txtTotalPagamento.Text = String.Empty;
            numUdLitros.ResetText();
        }

        private void CleanForm(Control ctrl)
        {
            foreach (var c in ctrl.Controls)
            {
                if (c is TextBox)
                {
                    ((TextBox)c).Text = " ";//String.Empty;
                }


            }
        }


        private void LimparControles() {
            //frmPrincipal.cont
            foreach (Control control in Controls)
            {
                if (control is TextBox)
                {
                    control.ResetText();
                }

                
            }
        }
    }
}
