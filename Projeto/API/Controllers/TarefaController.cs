using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Models;

namespace API.Controllers;

[Route("api/tarefa")]
[ApiController]
public class TarefaController : ControllerBase
{
    private readonly AppDataContext _context;

    public TarefaController(AppDataContext context) =>
        _context = context;

    // GET: api/tarefa/listar
    [HttpGet]
    [Route("listar")]
    public IActionResult Listar()
    {
        try
        {
            List<Tarefa> tarefas = _context.Tarefas.Include(x => x.Categoria).ToList();
            return Ok(tarefas);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // POST: api/tarefa/cadastrar
    [HttpPost]
    [Route("cadastrar")]
    public IActionResult Cadastrar([FromBody] Tarefa tarefa)
    {
        try
        {
            Categoria? categoria = _context.Categorias.Find(tarefa.CategoriaId);
            if (categoria == null)
            {
                return NotFound();
            }
            tarefa.Categoria = categoria;
            _context.Tarefas.Add(tarefa);
            _context.SaveChanges();
            return Created("", tarefa);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // GET: api/tarefa/naoconcluidas
    [HttpGet]
    [Route("naoconcluidas")]
    public IActionResult NaoConcluidas()
    {
        try
        {
            List<Tarefa> tarefas = _context.Tarefas.Include(x => x.Status == "Não iniciada" || x.Status == "Em andamento").ToList();
            return Ok(tarefas);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // GET: api/tarefa/concluidas
    [HttpGet]
    [Route("concluidas")]
    public IActionResult Concluidas()
    {
        try
        {
            List<Tarefa> tarefas = _context.Tarefas.Include(x => x.Status == "Concluída").ToList();
            return Ok(tarefas);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // PATCH: api/tarefa/alterar
    [HttpPatch]
    [Route("alterar/{id}")]
    public IActionResult Alterar([FromRoute] int id,
        [FromBody] Tarefa tarefa)
    {
        try
        {
            //Expressões lambda
            Tarefa? tarefaCadastrada =
                _context.Tarefas.FirstOrDefault(x => x.TarefaId == id);

            if (tarefaCadastrada != null)
            {

                Categoria? categoria =
                    _context.Categorias.Find(tarefa.CategoriaId);
                if (categoria == null)
                {
                    return NotFound();
                }

                tarefaCadastrada.Categoria = categoria;
                tarefaCadastrada.Titulo = tarefa.Titulo;
                tarefaCadastrada.Descricao = tarefa.Descricao;
                _context.Tarefas.Update(tarefaCadastrada);
                _context.SaveChanges();

                if (tarefa.Status == "Em andamento")
                {
                    tarefaCadastrada.Status = "Concluída";
                }
                else if (tarefa.Status == "Concluída")
                {
                    tarefaCadastrada.Status = "Não iniciada";
                }
                else
                {
                    tarefaCadastrada.Status = "Em andamento";
                }

                return Ok();
            }
            return NotFound();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}
