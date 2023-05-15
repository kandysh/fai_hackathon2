using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Hackathon
{
    public partial class StateMangement : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["session"] == null)
            {
                Session["session"] = new List<KeyValuePair<string, string>>();
            }
            if (ViewState["view"] == null)
                ViewState["view"] = new List<KeyValuePair<string, string>>();
        }

        protected void session_Click(object sender, EventArgs e)
        {
            var kv = new KeyValuePair<string, string>(ke.Text, val.Text);
            var sess = Session["session"] as List<KeyValuePair<string, string>>;
            sess.Add(kv);
            txtrepeater.DataSource = sess;
            txtrepeater.DataBind();
        }

        protected void application_Click(object sender, EventArgs e)
        {
            var app = Application["app"] as List<KeyValuePair<string, string>>;
            var kv = new KeyValuePair<string, string>(ke.Text, val.Text);
            app.Add(kv);
            txtrepeater.DataSource = app;
            txtrepeater.DataBind();
        }

        protected void PageViewState_Click(object sender, EventArgs e)
        {
            var view = ViewState["view"] as List<KeyValuePair<string, string>>;

            var kv = new KeyValuePair<string, string>(ke.Text, val.Text);
            view.Add(kv);
            txtrepeater.DataSource = view;
            txtrepeater.DataBind();
        }
    }
}